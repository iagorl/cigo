import { Component, OnInit } from '@angular/core';
import { CigoDataService } from '../../services/cigo-data.service';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-cigo',
  templateUrl: './cigo.component.html',
  styleUrls: ['./cigo.component.scss']
})
export class CigoPageComponent implements OnInit {
  viewPrim: boolean;
  totalViajes: number;
  totalTons: string;

  title_from = '';
  title_to = '';

  view: any[] = [50, 160];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  title: string;

  columns = [
    { name: 'Hora', value: 'hora'},
    { name: 'Viajes [N]', value: 'viajes'},
    { name: 'Toneladas [Ton]', value: 'tons'},
  ];
  columns2 = [
    { name: 'Prom. Tons [Ton]', value: 'tons_promedio'},
    { name: 'T. Cola [min]', value: 'tiempo'},
  ];
  columns3 = [
    { name: 'Distancia [Km]', value: 'distancia'},
    { name: 'Velocidad [Km/Hrs]', value: 'velocidad'},
    { name: 'SPI', value: 'spi'},
    { name: 'LEY', value: 'ley'},
  ];
  firstTableData = [];
  secondTableData = [];
  firstData = [];
  showTable = false;
  progressValue: any;

  constructor(
    private dataService: CigoDataService
  ) { }

  ngOnInit() {
    this.progressValue = 0;
    this.viewPrim = true;
    const timer = TimerObservable.create(0, 100);
    const number = 123456789;
    timer.subscribe(t => {
      if (t % 100 === 0) {
        this.progressValue = 0;
        (this.viewPrim) ? this.changeData('PRIM') : this.changeData('PRIM DOS');
      } else  {
        this.progressValue = t % 100;
      }
    });

  }

  changeData(chart: string) {
    this.view = [50, 160];
    this.viewPrim = !this.viewPrim;
    this.showTable = false;
    this.firstData = [];
    this.firstTableData = [];
    this.secondTableData = [];
    const actualHour = (new Date()).getHours();
    const initialHour = (actualHour > 12) ? actualHour - 12 : 0;
    this.title = (chart === 'PRIM') ? 'Chancador Primario (1)' : 'Chancador Primario (2)';

    this.dataService.dataCigo$.subscribe(data => {
      if (chart in data) {
        const firstTableObject = {
          name: '',
          series: []
        };
        const secondTableObject = {
          name: '',
          series: []
        };
        let promViaje = 0;
        let promTons = 0;
        let promPromTons = 0;
        let promTiempo = 0;
        let promDist = 0;
        let promVel = 0;
        let promSpi = 0;
        let promLey = 0;
        data[chart].series.map(elem => {
          const baseHour = elem.fecha.getHours();
          const hour = baseHour - initialHour;
          const printHour = (baseHour > 9) ? `${baseHour}:00` : `0${baseHour}:00`;
          if (baseHour <= actualHour && baseHour >= initialHour) {
            if (elem.data_type === '1_VAL') {
              this.title_from = this.firstData.length ? this.title_from : elem.fecha;
              this.firstData.push({
                hora: printHour,
                viajes: elem.viajes,
                tons: elem.tons,
                tiempo: elem.tiempo,
                tons_promedio: elem.tons_promedio,
                spi: elem.spi,
                distancia: elem.distancia,
                velocidad: elem.velocidad,
                ley: elem.ley
              });

              promViaje += elem.viajes;
              promTons += elem.tons;

              promPromTons += elem.tons_promedio;
              promTiempo += elem.tiempo;

              promSpi += elem.spi;
              promLey += elem.ley;
              promVel += elem.velocidad;
              promDist += elem.distancia;
            }

            if (elem.data_type === '2_AVG') {
              this.title_to = elem.fecha;
              this.firstData.push({
              hora: 'Prom',
              viajes: elem.viajes,
              tons: elem.tons,
              tiempo: elem.tiempo,
              tons_promedio: elem.tons_promedio,
              spi: elem.spi,
              distancia: elem.distancia,
              velocidad: elem.velocidad,
              ley: elem.ley});
            }
          }
        });

        this.view[0] = this.view[0] * (this.firstData.length - 1) / 2;
        console.log(this.view);

        const firstPromTableObject = {
          name: 'Prom',
          series: []
        };
        const secondPromTableObject = {
          name: 'Prom',
          series: []
        };
        for (const elem of this.firstData) {
          firstTableObject.series.push({
            name: '' + elem.tons,
            value: elem.tons
          });
          firstPromTableObject.series.push({
              name: '' + elem.tons,
              value: Math.floor(promTons / (this.firstData.length - 1))
          });
          secondTableObject.series.push({
            name: '' + elem.tiempo,
            value: elem.tiempo
          });
          secondPromTableObject.series.push({
            name: '' + elem.tiempo,
            value: Math.floor(promTiempo / (this.firstData.length - 1))
        });
      }
        this.totalTons = (new Intl.NumberFormat('de-DE').format(promTons));
        this.totalViajes = promViaje;
        this.firstTableData.push(firstTableObject);
        this.secondTableData.push(secondTableObject);
        this.firstTableData.push(firstPromTableObject);
        this.secondTableData.push(secondPromTableObject);

        this.showTable = true;
      }
    });
  }

  onSelect(event) {
    console.log(event);
  }


}
