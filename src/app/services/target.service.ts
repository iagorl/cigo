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
  originalChartsValue: any;
  lastTarget: string;
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
      this.generateData('WK', 'Distancia', 'Total Fases');
    });
  }

  getValue(target: string, field: string, fase: string, date: string) {
    const elem = this.originalData.find((row) => {
      return row.fase === fase && row.fecha === date && row.kpi_nombre === field && row.tipo_target === target;
    });

    return elem ? elem.valor_target : null;
  }

  generateData(target: string, field: string, fase: string) {
    const targetString = `${target}.${field}.${fase}`;
    if (this.dataDict[targetString]) {
      this.target$.next([this.dataDict[targetString]]);
      return;
    }
    console.log(this.originalData);
    const cf = crossfilter(this.originalData);
    this.dataByDate = cf.dimension((row) => row['fecha']);

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

    const chartsValue = this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
    .filter(elem => {
      const datum = elem.value.find(e => e.key === targetString);
      return datum && datum.valor;
    })
    .map(elem => {
      const datum = elem.value.find(e => e.key === targetString);
      return {
        name: new Date(elem.key),
        value: datum ? datum.valor : null
      };
    });
    this.lastTarget = targetString;
    this.originalChartsValue = chartsValue;

    this.dataDict[targetString] = {name: 'Target', series: chartsValue};
    this.target$.next([{name: 'Target', series: chartsValue}]);
  }

  changeTargetData(initDate: Date = null, endDate: Date = null) {
    const newSerie = this.originalChartsValue.filter(elem => {
      return (elem.name >= initDate && elem.name <= endDate);
    });
    this.dataDict[this.lastTarget] = {name: 'Target', series: newSerie};
    this.target$.next([{name: 'Target', series: newSerie}]);
  }

}
