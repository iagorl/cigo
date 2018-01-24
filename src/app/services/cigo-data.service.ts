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

  constructor(private http: HttpClient) {
    this.data = {};
    this.dataCigo$ = new BehaviorSubject({});
    this.getData();
  }

  getData() {
    const fases = {};
    this.http.get<ChartData[]>('/assets/dataCigo.json').subscribe((data) => {
      this.originalData = data;
      const crossf = crossfilter(this.originalData);

      const dataByField = crossf.dimension((row) => row['chancador']);

      const addReduce = (p, v) => {
        const fecha = new Date(v['fecha_hora']);
        const k = {
          distancia: Number(v['Distancia']),
          fecha: fecha,
          hora: fecha.getHours() + ':00',
          viajes: Number(v['viajes']),
          tons: Number(v['tons']),
          tons_promedio: Number(v['tons_promedio']),
          tiempo: Number(v['tiempo_cola']),
          velocidad: Number(v['velocidad']),
          ley: Number(v['ley']),
          spi: Number(v['SPI'])
        };
        if ((!p[v['chancador']])) {
          p[v['chancador']] = {
            series: [],
            total_tons: 0,
            total_viajes: 0
          };
        }
        p[v['chancador']].series.push(k);
        p[v['chancador']].total_tons += k.tons;
        p[v['chancador']].total_viajes += k.viajes;
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
