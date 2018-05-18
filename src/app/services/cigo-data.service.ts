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
  dataAvailable$: BehaviorSubject<boolean>
  apiUrl = 'https://latam-cppr-cigo.azurewebsites.net/api';

  constructor(private http: HttpClient) {
    this.data = {};
    this.dataCigo$ = new BehaviorSubject({});
    this.dataAvailable$ = new BehaviorSubject(false);
  }

  getData(rowNumber = 12) {
    this.dataAvailable$.next(false);
    const fases = {};
    this.http.get<ChartData[]>(`${this.apiUrl}/${rowNumber}`).subscribe((data) => {
      this.originalData = data;
      const crossf = crossfilter(this.originalData);

      const dataByField = crossf.dimension((row) => row['EQUIPO']);

      const addReduce = (p, v) => {
        const k = this.setEquipmentData(v);
          if (v['TIPO_EQUIPO'] === 'CHANCADOR') {
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
        } else {
          if ((!p[v['EQUIPO']])) {
            p[v['EQUIPO']] = {
              series: [],
              total_alimentacion: 0,
              total_tratamiento: 0
            };
          }
          p[v['EQUIPO']].series.push(k);
          p[v['EQUIPO']].total_alimentacion += k.alimentacion;
          p[v['EQUIPO']].total_tratamiento += k.tratamiento;
        }
        
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
      this.dataAvailable$.next(true);
    });
  }

  setEquipmentData(row): any {
    const date = new Date(row['FECHA_HORA']);
    if (row['TIPO_EQUIPO'] === 'CHANCADOR') {
      return {
        data_type: row['TIPO_REG'],
        fecha: date,
        hora: date.getHours() + ':00',
        viajes: this.parsePropertyValue(row['VALOR_01']),
        tons: this.parsePropertyValue(row['VALOR_02']),
        tons_promedio: this.parsePropertyValue(row['VALOR_03']),
        tiempo: this.parsePropertyValue(row['VALOR_04']),
        distancia: this.parsePropertyValue(row['VALOR_05']),
        velocidad: this.parsePropertyValue(row['VALOR_06']),
        ley: this.parsePropertyValue(row['VALOR_08']),
        spi: this.parsePropertyValue(row['VALOR_07'])
      };
    } else {
      return {
        data_type: row['TIPO_REG'],
        fecha: date,
        hora: date.getHours() + ':00',
        alimentacion: this.parsePropertyValue(row['VALOR_01']),
        stockpile: this.parsePropertyValue(row['VALOR_02']),
        tratamiento: this.parsePropertyValue(row['VALOR_03']),
        operacion: this.parsePropertyValue(row['VALOR_04']),
        alimentacion_2: this.parsePropertyValue(row['VALOR_05']),
        tratamiento_2: this.parsePropertyValue(row['VALOR_06'])
      };
    }
  }

  parsePropertyValue(value) {
    return !!value ? parseFloat(value) : parseFloat('0');
  }

}
