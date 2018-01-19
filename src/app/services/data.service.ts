import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import * as crossfilter from 'crossfilter2';
import { Range, Offset } from './range.service';

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
  originalData: SampleData[];
  data: ChartData[];
  currentData: ChartData;
  data$: BehaviorSubject<ChartData[]>;
  dataScatter: {x: ChartData, y: ChartData, z: ChartData};
  dataScatter$: BehaviorSubject<{x: ChartData, y: ChartData, z: ChartData}>;
  colorSet$: BehaviorSubject<string[]>;
  defaultDomain = ['#1774F0', 'red', 'black', 'black', 'green'];
  warnings: WarningDict[];
  innerWarnings$: BehaviorSubject<WarningDict[]>;
  cf: any;
  fasesList: string[];
  kpiList: string[] = [];

  dataByDate: any;

  constructor(private http: HttpClient) {
    this.data = [];
    this.data$ = new BehaviorSubject<ChartData[]>([]);
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
      this.changeScatterData('x', 'Distancia', 'Total Fases');
      this.changeScatterData('y', 'Extraccion', 'Total Fases');
      this.changeScatterData('z', 'Oper. Truck', 'Total Fases');
      // this.data$.next(finalData);
      this.fasesList = Object.keys(fases);
    });
  }

  changeData(field: string, fase: string) {
    const dataForField = this.data.find(d => d.name === field);
    const newSeries = dataForField.series.filter((d) => d.fase === fase);
    this.currentData = {name: field, series: newSeries};
    this.data$.next([{name: field, series: newSeries}]);
  }

  changeScatterData(chartKey: string, field: string, fase: string) {
    const dataForField = this.data.find(d => d.name === field);
    const newSeries = dataForField.series.filter((d) => d.fase === fase);
    this.dataScatter[chartKey] = {name: field, series: newSeries};
    this.dataScatter$.next(this.dataScatter);
  }

  getSubData(name: string, data: any) {
    const crossf = crossfilter(data);

    const dataByDate = crossf.dimension((row) => row['fecha']);
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

    const chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
    .map(elem => {
      return {
        name: new Date(elem.key),
        fase: elem.value.fase,
        value: elem.value.valor
      };
    });
    return {name: name, series: chartsValue};
  }

  studyData(range: Range) {
    if (!range.alerts) {
      return;
    }
    const data = this.currentData.series;
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
      this.data$.next(this.data$.getValue().concat({name: name, series: rangeData}));
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
