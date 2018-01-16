import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import * as crossfilter from 'crossfilter2';
import { Range, Offset } from './range.service';

export interface ChartSeries {
  name: any;
  value: number;
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
  data: SampleData[];
  data$: BehaviorSubject<ChartData[]>;
  warning: WarningDict[];
  warning$: BehaviorSubject<WarningDict[]>;
  cf: any;

  dataByDate: any;

  constructor(private http: HttpClient) {
    this.data = [];
    this.data$ = new BehaviorSubject<ChartData[]>([]);
    this.warning = [];
    this.warning$ = new BehaviorSubject<WarningDict[]>([]);
    this.getData();
  }

  getData() {
    this.http.get<SampleData[]>('/assets/newData.json').subscribe((data) => {
      this.data = data;
      this.cf = crossfilter(data);

      this.dataByDate = this.cf.dimension((row) => row['date']);
      const field = 'fuel_price';
      const field2 = 'unemployment';

      const addReduce = (p, v) => {
        p = {
          fuel_price: v[field],
          unemployment: v[field2]
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

      const fuelPriceToSend = this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all().map(elem => {
        return {
          name: new Date(elem.key),
          value: elem.value.fuel_price
        };
      });

      const unemploymentToSend = this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all().filter(elem => {
        return elem.value.unemployment !== 'NA';
      }).map(elem => {
        if (elem.value.unemployment !== 'NA') {
          return {
            name: new Date(elem.key),
            value: elem.value.unemployment !== 'NA' ? elem.value.unemployment : 0
          };
        }
      });

      this.data$.next([{name: 'Fuel Price', series: fuelPriceToSend}, {name: 'Unemployment', series: unemploymentToSend}]);
    });
  }

  studyData(range: Range) {

    const field = 'fuel_price';
    const field2 = 'unemployment';

    const addReduce = (p, v) => {
      p = {
        fuel_price: v[field],
        unemployment: v[field2]
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

    const warningsByKey = {};
    const data = this.dataByDate
        .group()
        .reduce(addReduce, removeReduce, initReduce)
        .all();
    for (const elem of data) {
      const currentElem = new Date(elem.key);
      const minDate = new Date(range.minX);
      const maxDate = new Date(range.maxX);
      if ( currentElem.getTime() > maxDate.getTime()) {
        break;
      } else if (currentElem.getTime() >= minDate.getTime()) {
        const keys = Object.keys(data[0].value);
        keys.map(key => {
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
              ((limit.value < elem.value[key]) && greater) ||
              ((limit.value > elem.value[key]) && lower) ||
              ((limit.value === elem.value[key]) && equals)) {

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
        });
      }
    }
    this.warning.push(warningsByKey);
    this.warning$.next(this.warning);
  }

  setRange(name: string, initialPoint: string, functionValue: number) {
    let rangeData: ChartSeries[];
    let limitValue = new Date(initialPoint).getTime();
    this.http.get<SampleData[]>('/assets/newData.json').subscribe((data) => {
      this.data = data;
      this.cf = crossfilter(data);

      this.dataByDate = this.cf.dimension((row) => row['date']);
      const field = 'fuel_price';
      const field2 = 'unemployment';

      const addReduce = (p, v) => {
        p = {
          fuel_price: v[field],
          unemployment: v[field2]
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

      rangeData = this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all().filter(elem => {
        if (new Date(elem.key).getTime() > limitValue) {
          return elem;
        }
      }).map( elem => {
          console.log(elem.key);
          return {
            name: new Date(elem.key),
            value: functionValue
          };
      });

      this.data$.next(this.data$.getValue().concat({name: name, series: rangeData}));
    });
  }
}