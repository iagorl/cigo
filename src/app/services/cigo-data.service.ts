import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ChartData, SampleData } from './data.service';
import * as crossfilter from 'crossfilter2';


@Injectable()
export class CigoDataService {

  data: any;
  originalData: ChartData[];
  dataCigo$: BehaviorSubject<any>;
  apiUrl = 'https://cigo-deploy.azurewebsites.net/api';

  constructor(private http: HttpClient) {
    this.data = {};
    this.dataCigo$ = new BehaviorSubject({});
    this.getData();
  }

  getData() {
    const fases = {};
    this.http.get<ChartData[]>(this.apiUrl).subscribe((data) => {
      this.originalData = data;
      const crossf = crossfilter(this.originalData);

      const dataByField = crossf.dimension((row) => row['FIELD2']);

      const addReduce = (p, v) => {
        const fecha = new Date(v['FIELD1']);
        const k = {
          distancia: parseFloat(v['FIELD8']),
          fecha: fecha,
          hora: fecha.getHours() + ':00',
          viajes: parseFloat(v['FIELD4']),
          tons: parseFloat(v['FIELD5']),
          tons_promedio: parseFloat(v['FIELD6']),
          tiempo: parseFloat(v['FIELD7']),
          velocidad: parseFloat(v['FIELD9']),
          ley: parseFloat(v['FIELD11']),
          spi: parseFloat(v['FIELD10'])
        };
        if ((!p[v['FIELD2']])) {
          p[v['FIELD2']] = {
            series: [],
            total_tons: 0,
            total_viajes: 0
          };
        }
        p[v['FIELD2']].series.push(k);
        p[v['FIELD2']].total_tons += k.tons;
        p[v['FIELD2']].total_viajes += k.viajes;
        return p;
      };
      const removeReduce = (p, v) => {
        return p;
      };
      const initReduce = () => {
        return {
        };
      };
      const prueba = data.reduce(addReduce, {});

      const pruebaArray = [];
      this.data = prueba;
      this.dataCigo$.next(this.data);
    });
  }

}
