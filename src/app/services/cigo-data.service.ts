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

      const dataByField = crossf.dimension((row) => row['EQUIPO']);

      const addReduce = (p, v) => {
        const fecha = new Date(v['FECHA_HORA']);
        const k = {
          distancia: parseFloat(v['VALOR_05']),
          fecha: fecha,
          hora: fecha.getHours() + ':00',
          viajes: parseFloat(v['VALOR_01']),
          tons: parseFloat(v['VALOR_02']),
          tons_promedio: parseFloat(v['VALOR_03']),
          tiempo: parseFloat(v['VALOR_04']),
          velocidad: parseFloat(v['VALOR_06']),
          ley: parseFloat(v['VALOR_08']),
          spi: parseFloat(v['VALOR_07'])
        };
        if ((!p[v['EQUIPO']])) {
          p[v['EQUIPO']] = {
            series: [],
            total_tons: 0,
            total_viajes: 0
          };
        }
        p[v['EQUIPO']].series.push(k);
        p[v['EQUIPO']].total_tons += k.tons;
        p[v['EQUIPO']].total_viajes += k.viajes;
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
