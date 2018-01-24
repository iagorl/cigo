import { Component, OnInit } from '@angular/core';
import { CigoDataService } from '../../services/cigo-data.service';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-cigo',
  templateUrl: './cigo.component.html',
  styleUrls: ['./cigo.component.scss']
})
export class CigoPageComponent implements OnInit {
  totalViajes: number;
  totalTons: number;

  view: any[] = [400, 160];

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

  constructor(
    private dataService: CigoDataService
  ) { }

  ngOnInit() {
    const timer = TimerObservable.create(0, 10000);
    timer.subscribe(t => {
      console.log(t % 2);
      (t % 2 === 0) ? this.changeData('PRIM') : this.changeData('PRIM DOS');
    });
  }

  changeData(chart: string) {
    this.showTable = false;
    this.firstData = [];
    this.firstTableData = [];
    this.secondTableData = [];
    for (let i = 0; i < 12; i++) {
      this.firstData.push({
        hora: `0${i}:00`,
        viajes: 0,
        tons: 0,
        tiempo: 0,
        tons_promedio: 0,
        spi: 0,
        distancia: 0,
        velocidad: 0,
        ley: 0});
    }
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
          const hour = elem.fecha.getHours();
          if (hour <= 11) {
            this.firstData[hour].viajes += elem.viajes;
            this.firstData[hour].tons += elem.tons;

            promViaje += elem.viajes;
            promTons += elem.tons;

            this.firstData[hour].tiempo += elem.tiempo;
            this.firstData[hour].tons_promedio += elem.tons_promedio;

            promPromTons += elem.tons_promedio;
            promTiempo += elem.tiempo;

            this.firstData[hour].spi += elem.spi;
            this.firstData[hour].ley += elem.ley;
            this.firstData[hour].velocidad += elem.velocidad;
            this.firstData[hour].distancia += elem.distancia;

            promSpi += elem.spi;
            promLey += elem.ley;
            promVel += elem.velocidad;
            promDist += elem.distancia;
          }
        });
        this.firstData.push({
          hora: 'Prom',
          viajes: Math.floor(promViaje / 12),
          tons: Math.floor(promTons / 12),
          tiempo: Math.floor(promTiempo / 12),
          tons_promedio: Math.floor(promPromTons / 12),
          spi: Math.floor(promSpi / 12),
          distancia: Math.floor(promDist / 12),
          velocidad: Math.floor(promVel / 12),
          ley: Math.floor(promLey / 12)});

        const firstPromTableObject = {
          name: 'Prom',
          series: []
        };
        const secondPromTableObject = {
          name: 'pron',
          series: []
        };
        for (const elem of this.firstData) {
          firstTableObject.series.push({
            name: '' + elem.tons,
            value: elem.tons
          });
          firstPromTableObject.series.push({
              name: '' + elem.tons,
              value: Math.floor(promTons / 12)
          });
          secondTableObject.series.push({
            name: '' + elem.tiempo,
            value: elem.tiempo
          });
          secondPromTableObject.series.push({
            name: '' + elem.tiempo,
            value: Math.floor(promTiempo / 12)
        });
        }
        this.totalTons = promTons;
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
  go () {
    console.log('hola');
    setTimeout(this.go(), 10000); // callback
  }

}
