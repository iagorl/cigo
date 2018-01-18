import { Injectable } from '@angular/core';
import { ChartData } from './data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as crossfilter from 'crossfilter2';
import { HttpClient } from '@angular/common/http';

export interface TargetData {
  fecha: string;
  tipo_target: string;
  kpi_nombre: string;
  fase: string;
  valor_target: number;
}


@Injectable()
export class TargetService {
  originalData: TargetData[];
  target$: BehaviorSubject<ChartData[]>;
  dataDict: {[name: string]: ChartData};
  cf: any;

  dataByDate: any;

  constructor(private http: HttpClient) {
    this.dataDict = {};
    this.target$ = new BehaviorSubject<ChartData[]>([]);
    this.getData();
  }

  getData() {
    this.http.get<TargetData[]>('/assets/targets.json').subscribe((data) => {
      this.originalData = data;
      this.generateData('BUDGET', 'Distancia', 'Total Fases');
    });
  }

  generateData(target: string, field: string, fase: string) {
    const cf = crossfilter(this.originalData);
    const targetString = `${target}.${field}.${fase}`;
    const dataByDate = cf.dimension((row) => row['fecha']);

      const addReduce = (p, v) => {
        p.push({
          key: `${v['tipo_target']}.${v['kpi_nombre']}.${v['fase']}`,
          valor: v['valor_target']
        });
        return p;
      };
      const removeReduce = (p, v) => {
        return p;
      };
      const initReduce = () => {
        return [];
      };

      const chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce).all().map(elem => {
        const datum = elem.value.find(e => e.key === targetString);
        return {
          name: new Date(elem.key),
          value: datum ? datum.valor : null
        };
      });

      this.dataDict[targetString] = {name: 'Target', series: chartsValue};
      this.target$.next([{name: 'Target', series: chartsValue}]);
  }

}
