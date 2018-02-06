import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import * as crossfilter from 'crossfilter2';
import { Range, Offset } from './range.service';
import * as moment from 'moment';

export interface ChartSeries {
  name: any;
  value: number;
  fase?: string;
}

export interface ChartData {
  name: string;
  series: ChartSeries[];
}

export interface SampleData {
  store: number;
  date: string;
  temperature: number;
  fuel_price: number;
  cpi: number;
  unemployment: number;
  is_holiday: boolean;
}

export interface SampleParetoData {
  team: string;
  date: string;
  hours: number;
  n: number;
  mttr: number;
}

export interface SampleFuelData {
  name: string;
  fecha: Date;
  litros: number;
  consumo: number;
  energia: number;
  co2_equiv: number;
  movimiento_total: number;
  l_kt: number;
  tiempo_operativo: number;
  l_h: number;
  dist_media: number;
  l_kt_km: number;
  t_h: number;
  kt_km: number;
}

export interface Warning {
  complete: boolean;
  first: Date;
  last: Date;
  chartKey: string;
  limitIndex: string;
}

export interface WarningDict {
  [chartName: string]: [{
    [limitsIndex: string]: Warning[]
  }];
}

@Injectable()
export class DataService {
  dataSelectedScatter: { 'x': string; 'y': string; 'z': string; };
  selectedFuelControl: string;
  originalData: SampleData[];
  originalParetoData: SampleData[];
  originalFuelData: SampleFuelData[];
  data: ChartData[];
  currentData: ChartData;
  currentHistData: ChartData;
  dataControl$: BehaviorSubject<ChartData[]>;

  dataHist$: BehaviorSubject<ChartData[]>;
  dataControlFuel$: BehaviorSubject<any[]>;
  dataPareto$: BehaviorSubject<any[]>;
  dataParetoCumm$: BehaviorSubject<ChartData[]>;
  dataScatter: {x: ChartData, y: ChartData, z: ChartData};
  dataScatter$: BehaviorSubject<{x: ChartData, y: ChartData, z: ChartData}>;
  colorSet$: BehaviorSubject<string[]>;
  defaultDomain = ['#1774F0', 'red', 'black', 'black', 'green'];
  warnings: WarningDict[];
  innerWarnings$: BehaviorSubject<WarningDict[]>;
  cf: any;
  fasesList: string[];
  kpiList: string[] = [];
  currentFuelData: any;

  dataByDate: any;
  originalDataByDate: any;

  constructor(private http: HttpClient) {
    this.data = [];
    this.dataHist$ = new BehaviorSubject<ChartData[]>([]);
    this.dataControl$ = new BehaviorSubject<ChartData[]>([]);
    this.dataControlFuel$ = new BehaviorSubject<any[]>([]);
    this.dataPareto$ = new BehaviorSubject<any[]>([]);
    this.dataParetoCumm$ = new BehaviorSubject<ChartData[]>([]);
    this.warnings = [];
    this.innerWarnings$ = new BehaviorSubject<WarningDict[]>([]);
    this.getData();
    this.dataScatter = {
      'x': null,
      'y': null,
      'z': null
    };
    this.dataScatter$ = new BehaviorSubject(this.dataScatter);
    this.colorSet$ = new BehaviorSubject(this.defaultDomain);
  }

  getData() {
    const fases = {};
    this.http.get<SampleData[]>('/assets/dataSEP.json').subscribe((data) => {
      const crossf = crossfilter(data);

      const dataByDate = crossf.dimension((row) =>
      (row['Motivo_Nivel_1'] + '.' + row['ModoFallaDescripcion'] + '.' + row['EquipoId']));

      const addReduce = (p, v) => {
        p = {
          id: v['EquipoId'],
          nombre: v['EquipoNombre'],
          falla: v['Motivo_Nivel_1'] + ' - ' + v['ModoFallaDescripcion'],
          duracion: v['duracion_segs'],
          fechaFin: v['FechaFin'],
          fechaInicio: v['FechaInicio']
        };
        return p;
      };
      const removeReduce = (p, v) => {
        return p;
      };
      const initReduce = () => {
        return {
        };
      };


      const chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
      .map(elem => {
        const timeInSec = Number(elem.value.duracion);
        return {
          key: elem.key,
          fechaFin: elem.value.fechaFin,
          fechaInicio: elem.value.fechaInicio,
          falla: elem.value.falla,
          value: timeInSec,
          duracion: elem.value.duracion,
          id: elem.value.id
        };

      });

      this.originalParetoData = chartsValue;
      this.chageParetoData('106');
    });
    this.http.get<SampleData[]>('/assets/daily.json').subscribe((data) => {
      this.originalData = data;
      const addReduce = (p, v) => {
        const k = {
          fase: v['Fase'],
          valor: v['valor'],
          fecha: v['Fecha']
        };
        if (v['Fase'] !== 'Otras Fases' && v['Fase'] !== 'Total Fases') {
          fases[v['Fase']] = '';
        }
        if ((!p[v['KPI_nombre']])) {
          p[v['KPI_nombre']] = [];
          this.kpiList.push(v['KPI_nombre']);
        }
        if ((!isNaN(k.valor))) {
          p[v['KPI_nombre']].push(k);
        }
        return p;
      };
      const prueba = data.reduce(addReduce, {});

      const finalData = [];
      Object.keys(prueba).map(p => {
        if (p !== 'kpi_nombre' && p !== 'undefined') {
          const subDataObject = this.getSubData(p, prueba[p]);
          finalData.push(subDataObject);
        }
      });
      this.data = finalData;
      this.changeData('Distancia', 'Total Fases');
      this.changeHistogramData('Extraccion', 'Total Fases');
      this.fasesList = Object.keys(fases);
    });
    this.http.get<SampleFuelData[]>('/assets/dataFuel.json').subscribe((data) => {
      const testTipo = {};
      const testFlota = {};
      const testEquipo = {};
      this.originalFuelData = data;

      const addReduce = (p, v) => {
        const realDate =
          ( '' + v['fecha']).substring(0, 4) + '-' +
          ( '' + v['fecha']).substring(4, 6) + '-' +
          ( '' + v['fecha']).substring(6, 8);
        const elem = {
          name: v['tipo'] + '.' + v['flota'] + '.' + v['equipo'],
          fecha: realDate,
          litros: v['litros'],
          consumo: Number(( '' + v['consumo']).replace(',', '.')),
          energia: Number(( '' + v['energia']).replace(',', '.')),
          co2_equiv: Number(( '' + v['co2_equiv']).replace(',', '.')),
          movimiento_total: Number(( '' + v['movimiento_total']).replace(',', '.')),
          l_kt: Number(( '' + v['l_kt']).replace(',', '.')),
          tiempo_operativo: Number(( '' + v['tiempo_operativo']).replace(',', '.')),
          l_h: Number(( '' + v['l_h']).replace(',', '.')),
          dist_media: Number(( '' + v['dist_media']).replace(',', '.')),
          l_kt_km: Number(( '' + v['l_kt_km']).replace(',', '.')),
          t_h: Number(( '' + v['t_h']).replace(',', '.')),
          kt_km: Number(( '' + v['kt_km']).replace(',', '.')),
        };
        p.push(elem);
        return p;
      };
      this.originalFuelData = this.originalFuelData.reduce(addReduce, []);
      this.selectedFuelControl = 'litros';
      this.dataSelectedScatter = {
        'x': 'consumo',
        'y': 'movimiento_total',
        'z': 'dist_media'
      };

      this.changeFuelData('Camion', 'CAT 795F', 'CAC201');
    });
  }

  chageParetoData(target: string) {
    let totalValue = 0;
    const filteredData = this.originalParetoData.filter(elem => {
      if (elem['id'] === target) {
        totalValue += elem['value'];
        return true;
      }
      return false;
    });
    const orderedData = filteredData.sort((a, b) => {
      return b['value'] - a['value'];
    });
    const toPercentaje = orderedData.map((elem, index) => {
      elem['name'] = index;
      elem['value'] = Number((elem['value'] * 100 / totalValue).toFixed(2));
      return elem;
    });
    let totalSum = 0;
    const chartsValue2 = toPercentaje.map((elem) => {
      totalSum = Number((totalSum + elem['value']).toFixed(2));
      return {
        name: elem['name'],
        value: totalSum
      };
    });
    this.dataPareto$.next(toPercentaje);
    this.dataParetoCumm$.next([{name: 'Acumulado', series: chartsValue2}]);
  }
  changeData(field: string, fase: string) {
    const dataForField = this.data.find(d => d.name === field);
    const newSeries = dataForField.series.filter((d) => d.fase === fase);
    this.currentData = {name: field, series: newSeries};
    this.dataControl$.next([{name: field, series: newSeries}]);
  }

  changeFuelData(tipo: string, flota: string, equipo: string) {
    const compareString = tipo + '.' + flota + '.' + equipo;
    const newSerie = this.originalFuelData.filter((d) => d.name === compareString);
    const crossf = crossfilter(newSerie);
    const dataByDate = crossf.dimension((row) => row['fecha']);
    this.currentFuelData = dataByDate;
    this.changeFuelControlData(this.selectedFuelControl);
    this.changeScatterFuelData('x', this.dataSelectedScatter['x']);
    this.changeScatterFuelData('y', this.dataSelectedScatter['y']);
    this.changeScatterFuelData('z', this.dataSelectedScatter['z']);
  }
  changeFuelControlData(target: string) {
    const addReduce = (p, v) => {
      p = {
        value: v[target]
      };
      return p;
    };
    const removeReduce = (p, v) => {
      return p;
    };
    const initReduce = () => {
      return {
      };
    };

    const chartsValue = this.currentFuelData.group().reduce(addReduce, removeReduce, initReduce).all()
    .map(elem => {
      return {
        name: new Date(elem.key),
        value: elem.value.value
      };
    });
    this.dataControlFuel$.next([{name: target, series: chartsValue}]);
    this.selectedFuelControl = target;
  }

  changeHistogramData(field: string, fase: string) {
    const dataForField = this.data.find(d => d.name === field);
    const newSeries = dataForField.series.filter((d) => d.fase === fase);
    this.currentHistData = {name: field, series: newSeries};
    this.dataHist$.next([{name: field, series: newSeries}]);
  }

  changeScatterFuelData(chartKey: string, target: string) {
    this.dataSelectedScatter[chartKey] = target;
    const addReduce = (p, v) => {
      p = {
        value: v[target]
      };
      return p;
    };
    const removeReduce = (p, v) => {
      return p;
    };
    const initReduce = () => {
      return {
      };
    };

    const chartsValue = this.currentFuelData.group().reduce(addReduce, removeReduce, initReduce).all()
    .map(elem => {
      return {
        name: new Date(elem.key),
        value: elem.value.value
      };
    });
    this.dataScatter[chartKey] = {name: target, series: chartsValue};
    this.dataScatter$.next(this.dataScatter);
  }

  // changeScatterData(chartKey: string, field: string, fase: string) {
  //   const dataForField = this.data.find(d => d.name === field);
  //   const newSeries = dataForField.series.filter((d) => d.fase === fase);
  //   this.dataScatter[chartKey] = {name: field, series: newSeries};
  //   this.dataScatter$.next(this.dataScatter);
  // }

  getSubData(name: string, data: any) {
    const crossf = crossfilter(data);

    this.originalDataByDate = crossf.dimension((row) => row['fecha']);
    const field = 'fase';
    const field2 = 'valor';

    const addReduce = (p, v) => {
      p = {
        fase: v[field],
        valor: v[field2]
      };
      return p;
    };
    const removeReduce = (p, v) => {
      return p;
    };
    const initReduce = () => {
      return {
      };
    };

    const chartsValue = this.originalDataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
    .map(elem => {
      return {
        name: new Date(elem.key),
        fase: elem.value.fase,
        value: elem.value.valor
      };
    });
    return {name: name, series: chartsValue};
  }

  clearWarnings() {
    this.warnings = [];
    this.innerWarnings$ = new BehaviorSubject<WarningDict[]>([]);
  }

  studyData(range: Range, isCdi: boolean) {
    if (!range.alerts) {
      return;
    }
    const data = (isCdi) ? this.currentData.series : this.dataControlFuel$.getValue()[0].series;
    console.log(data);
    const warningsByKey = {};
    for (const elem of data) {
      const currentElem = new Date(elem.name);
      const minDate = new Date(range.minX);
      const maxDate = new Date(range.maxX);
      if ( currentElem.getTime() > maxDate.getTime()) {
        break;
      } else if (currentElem.getTime() >= minDate.getTime()) {
        const key = this.currentData.name;
          if (!warningsByKey[key]) {
            warningsByKey[key] = {};
          }
          range.limitPoints.map((limit, limitIndex) => {
            let actualWarning;
            if (!warningsByKey[key][limitIndex]) {
              warningsByKey[key][limitIndex] = [];
              actualWarning = {
                'condition': null,
                'first': null,
                'last': null,
                'complete': false
              };
            } else {
              actualWarning = warningsByKey[key][limitIndex].splice(-1, 1 )[0];
            }
            const equals = (limit.condition === 'equal' || limit.condition === 'gte' || limit.condition === 'lte');
            const greater = (limit.condition === 'gt' || limit.condition === 'gte');
            const lower = (limit.condition === 'lt' || limit.condition === 'lte');
            let passed = false;
            if (
              ((limit.value < elem.value) && greater) ||
              ((limit.value > elem.value) && lower) ||
              ((limit.value === elem.value) && equals)) {
                actualWarning.condition = limit.condition;
                if (!actualWarning.first) {
                  actualWarning.first = currentElem;
                  actualWarning.last = currentElem;
                } else {
                  actualWarning.last = currentElem;
                }
              passed = true;
            }
          if (!passed && !actualWarning.complete && actualWarning.last !== null) {
            actualWarning.complete = true;
            warningsByKey[key][limitIndex].push(actualWarning);
            actualWarning = {
              'condition': null,
              'first': null,
              'last': null,
              'complete': false
            };
          }
          if (currentElem.getTime() === maxDate.getTime()) {
            if (actualWarning.first !== null) {
              actualWarning.complete = true;
              warningsByKey[key][limitIndex].push(actualWarning);
            }
          } else {
            warningsByKey[key][limitIndex].push(actualWarning);
          }
        });
      }
    }
    this.warnings.push(warningsByKey);
    this.innerWarnings$.next(this.warnings);
  }

  setRange(name: string, initialPoint: string, finalPoint: string, functionValue: number) {
    let rangeData: ChartSeries[];
    const minX = initialPoint ? new Date(initialPoint).getTime() : null;
    const maxX = finalPoint ? new Date(finalPoint).getTime() : null;
    this.http.get<SampleData[]>('/assets/daily.json').subscribe((data) => {
      this.originalData = data;
      this.cf = crossfilter(data);

      this.dataByDate = this.cf.dimension((row) => row['fecha']);

      const addReduce = (p, v) => {
        return p;
      };
      const removeReduce = (p, v) => {
        return p;
      };
      const initReduce = () => {
        return {
        };
      };

      rangeData = this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all().filter(elem => {
        const currentDate = new Date(elem.key).getTime();
        if (this.validateRange(currentDate, minX, maxX)) {
          return elem;
        }
      }).map( elem => {
          return {
            name: new Date(elem.key),
            value: functionValue
          };
      });
      this.dataControl$.next(this.dataControl$.getValue().concat({name: name, series: rangeData}));
    });
  }

  validateRange( value: number, min: number, max: number ): boolean {
    if (min && max) {
      return (min <= value && value <= max);
    }
    if (min) {
      return (min <= value);
    }
    if (max) {
      return (value <= max);
    }
  }
}
