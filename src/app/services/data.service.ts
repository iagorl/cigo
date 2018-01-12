import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import * as crossfilter from 'crossfilter2';

export interface ChartSeries {
  name: string;
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

@Injectable()
export class DataService {
  data: SampleData[];
  data$: BehaviorSubject<ChartData[]>;
  cf: any;

  constructor(private http: HttpClient) {
    this.data = [];
    this.data$ = new BehaviorSubject<ChartData[]>([]);
    this.getData();
  }

  getData() {
    this.http.get<SampleData[]>('/assets/newData.json').subscribe((data) => {
      this.data = data;
      this.cf = crossfilter(data);

      const dim = this.cf.dimension((row) => row['date']);
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

      const fuelPriceToSend = dim.group().reduce(addReduce, removeReduce, initReduce).all().map(elem => {
        return {
          name: new Date(elem.key),
          value: elem.value.fuel_price
        };
      });

      const unemploymentToSend = dim.group().reduce(addReduce, removeReduce, initReduce).all().filter(elem => {
        return elem.value.unemployment !== 'NA';
      }).map(elem => {
        if (elem.value.unemployment !== 'NA') {
          return {
            name: new Date(elem.key),
            value: elem.value.unemployment !== 'NA' ? elem.value.unemployment : 0
          };
        }
      });



      console.log(unemploymentToSend);

      this.data$.next([{name: 'Fuel Price', series: fuelPriceToSend}, {name: 'Unemployment', series: unemploymentToSend}]);
    });
  }

}
