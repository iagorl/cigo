import { Component, OnInit } from '@angular/core';
import { CigoDataService } from '../../services/cigo-data.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-cigo',
  templateUrl: './cigo.component.html',
  styleUrls: ['./cigo.component.scss']
})
export class CigoPageComponent implements OnInit {
  viewPrim: boolean;
  showSettingForm = false;
  title_from = '';
  title_to = '';

  view: any[] = [50, 160];
  form = {
    timer: 20,
    rowNumber: 12,
    invalidRowNumber: false
  };

  rowNumber: number;
  viewTimer: number;
  barDivisor: number;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  columnSet: any;

  title: string;
  tableColumns = {
    chancador: {
      columns: [
        { name: ['Hora'], value: 'hora'},
        { name: ['Viajes', '[N]'], value: 'viajes'},
        { name: ['Toneladas', '[Ton]'], value: 'tons'},
      ],
      columns2: [
        { name: ['Prom. Tons', '[Ton]'], value: 'tons_promedio'},
        { name: ['T. Cola', '[min]'], value: 'tiempo'},
      ],
      columns3: [
        { name: ['Distancia', '[Km]'], value: 'distancia'},
        { name: ['Velocidad', '[Km/Hrs]'], value: 'velocidad'},
        { name: ['SPI'], value: 'spi'},
        { name: ['LEY'], value: 'ley'},
      ]
    },
    sag: {
      columns: [
        { name: ['Hora'], value: 'hora'},
        { name: ['Alimentación', '[tms]'], value: 'alimentacion'},
        { name: ['Stock Pile', '[tms]'], value: 'stockpile'},
      ],
      columns2: [
        { name: ['Tratamiento', '[tms]'], value: 'tratamiento'},
        { name: ['Operación', '[hrs]'], value: 'operacion'},
      ],
      columns3: [
        { name: ['Alimentación', 'LB + CF [tms]'], value: 'alimentacion_2'},
        { name: ['Tratamiento', 'LB + CF [tms]'], value: 'tratamiento_2'}
      ]
    }
  }

  filters = ['PRIM', 'PRIM DOS', 'CF', 'LB']
  chartTitles = [
    {
      firstChart: 'Evolución Toneladas',
      secondChart: 'Evolución T.Cola'
    },
    {
      firstChart: 'Evolución Alimentación',
      secondChart: 'Evolución Tratamiento'
    }]
  currentFilter = 0;
  selectedFilter = '';
  currentTitles = {};
  firstTableData = [];
  secondTableData = [];
  firstData = [];
  showTable = false;
  progressValue: any;

  // Chancador variables
  totalViajes: number;
  totalTons: string;
  promViaje = 0;
  promTons = 0;
  promPromTons = 0;
  promTiempo = 0;

  // SAG variables
  totalAlimentacion = 0;
  totalTratamiento = 0;
  promAlimentacion = 0;
  promTratamiento = 0;

  constructor(
    private dataService: CigoDataService
  ) { }

  ngOnInit() {
    this.progressValue = 0;
    this.viewPrim = true;
    const timer = TimerObservable.create(0, 100);
    const number = 123456789;
    this.updateViewTimer(20);
    this.rowNumber = 12;
    timer.subscribe(t => {
      if (t % this.viewTimer === 0) {
        if (t % 600 === 0) {
          this.dataService.getData(this.rowNumber);
        }
        this.progressValue = 0;
        this.selectedFilter = this.filters[this.currentFilter % 4];

        this.currentTitles = this.currentFilter % 4 < 2 ? this.chartTitles[0] : this.chartTitles[1];
        this.changeData(this.selectedFilter);
        this.currentFilter++;
      } else  {
        this.progressValue = t/this.barDivisor % 100;
      }
    });

  }

  changeData(chart: string) {
    this.viewPrim = !this.viewPrim;
    const actualHour = (new Date()).getHours();
    const initialHour = (actualHour > 12) ? actualHour - 12 : 0;
    this.title = this.setTableTitle(chart);
    this.totalTons = (new Intl.NumberFormat('de-DE').format(0));
    this.totalViajes = 0;

    this.totalAlimentacion = 0;
    this.totalTratamiento = 0;

    this.title_from = '';
    this.title_to = '';
    this.view = [undefined, undefined];

    this.dataService.dataCigo$.subscribe(data => {
      this.showTable = false;
      this.firstData = [];
      this.firstTableData = [];
      this.secondTableData = [];
      if (chart in data) {
        const firstTableObject = {
          name: '',
          series: []
        };
        const secondTableObject = {
          name: '',
          series: []
        };
        // Chancador variables
        this.promViaje = 0;
        this.promTons = 0;
        this.promPromTons = 0;
        this.promTiempo = 0;
        // SAG variables
        this.totalAlimentacion = 0;
        this.totalTratamiento = 0;
        this.promAlimentacion = 0;
        this.promTratamiento = 0;

        data[chart].series.map(elem => {
          const baseHour = new Date(elem.fecha.getTime() + (3 * 3600000)).getHours();
          const hour = baseHour - initialHour;
          (chart.includes('PRIM')) ? this.setChancadorData(elem, baseHour) : this.setSagData(elem, baseHour);
        });
        this.view[0] = 30 * this.firstData.length;
        this.view[1] = 100 * this.firstData.length / (this.rowNumber + 1);

        this.title_from = this.setRequestTitle(this.rowNumber + 3);
        this.title_to = this.setRequestTitle(3);

        const firstPromTableObject = {
          name: 'Prom',
          series: []
        };
        const secondPromTableObject = {
          name: 'Prom',
          series: []
        };

        if (chart.includes('PRIM')) {
          this.columnSet = this.tableColumns.chancador;
          for (const elem of this.firstData) {
            if (elem.hora !== 'Prom') {
              firstTableObject.series.push({
                name: '' + elem.hora,
                value: elem.tons
              });
              firstPromTableObject.series.push({
                  name: '' + elem.hora,
                  value: this.promPromTons
              });
              secondTableObject.series.push({
                name: '' + elem.hora,
                value: elem.tiempo
              });
              secondPromTableObject.series.push({
                name: '' + elem.hora,
                value: this.promTiempo
              });
            }
          }
          this.totalTons = (new Intl.NumberFormat('de-DE').format(this.promTons));
          this.totalViajes = this.promViaje;
          this.firstTableData.push(firstTableObject);
          this.secondTableData.push(secondTableObject);
          this.firstTableData.push(firstPromTableObject);
          this.secondTableData.push(secondPromTableObject);
        } else {
          this.columnSet = this.tableColumns.sag;
          for (const elem of this.firstData) {
            if (elem.hora !== 'Prom') {
              firstTableObject.series.push({
                name: '' + elem.hora,
                value: elem.alimentacion
              });
              firstPromTableObject.series.push({
                  name: '' + elem.hora,
                  value: this.promAlimentacion
              });
              secondTableObject.series.push({
                name: '' + elem.hora,
                value: elem.tratamiento
              });
              secondPromTableObject.series.push({
                name: '' + elem.hora,
                value: this.promTratamiento
              });
            }
          }
          this.firstTableData.push(firstTableObject);
          this.secondTableData.push(secondTableObject);
          this.firstTableData.push(firstPromTableObject);
          this.secondTableData.push(secondPromTableObject);
        }
        this.showTable = true;
      }
    });
  }

  setChancadorData(row: any, baseHour: number): void {
    const printHour = (baseHour > 9) ? `${baseHour}:00` : `0${baseHour}:00`;
    if (row.data_type === '1_VAL') {
      this.firstData.push({
        hora: printHour,
        viajes: row.viajes,
        tons: row.tons.toFixed(2),
        tiempo: row.tiempo.toFixed(2),
        tons_promedio: row.tons_promedio.toFixed(2),
        spi: row.spi.toFixed(2),
        distancia: row.distancia.toFixed(2),
        velocidad: row.velocidad.toFixed(2),
        ley: row.ley.toFixed(2)
      });
      this.promViaje += row.viajes;
      this.promTons += row.tons;
    }

    if (row.data_type === '2_AVG') {
      this.promPromTons = row.tons.toFixed(2);
      this.promTiempo = row.tiempo.toFixed(2);
      this.firstData.push({
      hora: 'Prom',
      viajes: row.viajes,
      tons: row.tons.toFixed(2),
      tiempo: row.tiempo.toFixed(2),
      tons_promedio: row.tons_promedio.toFixed(2),
      spi: row.spi.toFixed(2),
      distancia: row.distancia.toFixed(2),
      velocidad: row.velocidad.toFixed(2),
      ley: row.ley.toFixed(2)});
    }
  }

  setSagData(row: any, baseHour: number): void {
    const printHour = (baseHour > 9) ? `${baseHour}:00` : `0${baseHour}:00`;
    if (row.data_type === '1_VAL') {
      this.firstData.push({
        hora: printHour,
        alimentacion: row.alimentacion.toFixed(2),
        stockpile: row.stockpile.toFixed(2),
        tratamiento: row.tratamiento.toFixed(2),
        operacion: row.operacion.toFixed(2),
        alimentacion_2: row.alimentacion_2.toFixed(2),
        tratamiento_2: row.tratamiento_2.toFixed(2)
      });
      this.totalAlimentacion += row.alimentacion;
      this.totalTratamiento += row.tratamiento;
    }

    if (row.data_type === '2_AVG') {
      this.promAlimentacion = row.alimentacion;
      this.promTratamiento = row.tratamiento;
      this.firstData.push({
        hora: 'Prom',
        alimentacion: row.alimentacion.toFixed(2),
        stockpile: row.stockpile.toFixed(2),
        tratamiento: row.tratamiento.toFixed(2),
        operacion: row.operacion.toFixed(2),
        alimentacion_2: row.alimentacion_2.toFixed(2),
        tratamiento_2: row.tratamiento_2.toFixed(2)
      });
    }
  }

  setTableTitle(chart: string): string {
    if (chart.includes('PRIM')) {
      return (chart === 'PRIM') ? 'Chancador Primario (1)' : 'Chancador Primario (2)';
    } else {
      return (chart === 'CF') ? 'Planta SAG CF' : 'Planta SAG LB';
    }
  }

  setRequestTitle(hours: number): string {
    let baseDate = new Date(Date.now() - (hours * 3600000));
    baseDate.setMinutes(0);
    baseDate.setSeconds(0);
    return baseDate.toUTCString().split(',')[1].split('GMT')[0];
  }

  updateViewTimer(value: number): void {
    this.viewTimer = value * 10;
    this.barDivisor = this.viewTimer/100;
  }

  toggleSettingsForm(): void {
    this.form.timer = this.viewTimer / 10;
    this.form.rowNumber = this.rowNumber;
    this.showSettingForm = !this.showSettingForm;
    this.form.invalidRowNumber = false;
  }

  saveTimer(): void {
    this.updateViewTimer(this.form.timer);
    this.toggleSettingsForm();
  }

  saveRowNumber(): void {
    this.rowNumber = this.form.rowNumber;
    this.toggleSettingsForm();
  }

  validate(): void {
    this.form.invalidRowNumber = this.form.rowNumber <= 0 || this.form.rowNumber > 24;
  }

  onSelect(event) {
    console.log(event);
  }


}
