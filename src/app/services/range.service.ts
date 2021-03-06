import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, ChartData } from './data.service';
import { ViewService } from './view.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';

export interface Offset {
  value: number;
  condition: 'gt'|'equal'|'lt'|'lte'|'gte';
}

export interface Range {
  id: number;
  name: string;
  minX: string;
  maxX: string;
  limitPoints: Offset[];
  field?: string;
  alerts?: boolean;
}

export interface Alerts {
  [key: string]: [ {
    'from': string,
    'to': string
  } ];
}

@Injectable()
export class RangeService {

  possibleID: number;
  ranges: Range[];
  ranges$: BehaviorSubject<Range[]>;
  rangeData$: BehaviorSubject<ChartData[]>;
  activated$: Observable<boolean>;
  subscription: Subscription;
  isCdi: boolean;

  alerts: {};

  constructor(
    private dataservice: DataService,
    private view: ViewService,
    private http: HttpClient,
  ) {
  }
  initRanges(loadData: boolean) {
    this.possibleID = 0;
    this.ranges = [];
    this.ranges$ = new BehaviorSubject<Range[]>(this.ranges);
    this.rangeData$ = new BehaviorSubject<ChartData[]>([]);
    this.activated$ = this.view.activeView$.map(val => val === 'range');
    this.dataservice.dataControl$.map(d => d.length > 0).take(2).subscribe(val => {
      if (val && this.ranges.length === 0 && loadData) {
        this.getRanges();
      }
    });

    this.subscription = Observable.combineLatest(this.view.activeField$, this.view.activeFase$)
      .subscribe(([field, fase]) => {
        this.sendRange(field, fase);
      });
  }

  getRanges() {
    this.http.get<Range[]>('/assets/limits.json').subscribe((data) => {
      data.map((d, idx) => {
        this.addRangeByData(d);
      });
    });
  }

  sendRange(field: string, fase: string) {
    if (fase !== 'Total Fases') {
      this.rangeData$.next([]);
      this.ranges$.next([]);
    } else {
      const sendableRanges = this.ranges
        .filter((range) => range.field === field);

      const sendableData = sendableRanges
        .map((range) => {
          return {
            name: range.name,
            series: [
              {name: new Date(range.minX), value: range.limitPoints[0].value },
              {name: new Date(range.maxX), value: range.limitPoints[0].value },
            ]
          };
        });
      this.ranges$.next(sendableRanges);
      this.rangeData$.next(sendableData);
    }
  }

  addRangeByData(range: Range) {
    this.ranges.push(range);
    this.ranges$.next(this.ranges);
    this.rangeData$.next(this.ranges.map(r => {
      return {
        name: r.name,
        series: [
          {name: new Date(r.minX), value: r.limitPoints[0].value },
          {name: new Date(r.maxX), value: r.limitPoints[0].value },
        ]
      };
    }));
    this.dataservice.studyData(range, this.isCdi);
  }

  addRange(name: string, minX: string, maxX: string, limitPoints: Offset[]) {
    const newRange = {
      'id': this.possibleID,
      'name': name,
      'minX': minX,
      'maxX': maxX,
      'limitPoints': limitPoints,
      'field': this.view.field,
      'alerts': true
    };
    this.possibleID += 1;
    this.ranges.push(newRange);
    this.ranges$.next(this.ranges);
    this.rangeData$.next(this.ranges.map(range => {
      return {
        name: range.name,
        series: [
          {name: new Date(range.minX), value: range.limitPoints[0].value },
          {name: new Date(range.maxX), value: range.limitPoints[0].value },
        ]
      };
    }));
    this.dataservice.studyData(newRange, this.isCdi);
  }

  editRange(id: number, name: string, minX: string, maxX: string, limitPoints: Offset[]) {
    const index = this.ranges.findIndex(comment => comment.id === id);
    const newRange = {
      'id': id,
      'name': name,
      'minX': minX,
      'maxX': maxX,
      'limitPoints': limitPoints,
      'alerts': true
    };
    const newRanges = [
      ...this.ranges.slice(0, index),
      newRange,
      ...this.ranges.slice(index + 1),
    ];
    this.ranges = newRanges;
    this.ranges$.next(newRanges);
  }

  deleteRange(id: number) {
    const index = this.ranges.findIndex(range => range.id === id);
    this.ranges.splice(index, 1);
    this.ranges$.next(this.ranges);
  }

  changeRangeData(initDate: Date = null, endDate: Date = null) {
    const newRanges = this.ranges.map(range => {
      const newRange = Object.assign({}, range);
      const minX = new Date(range.minX);
      const maxX = new Date(range.maxX);
      newRange.minX = (minX < initDate) ? this.getDateFormat(initDate) : range.minX;
      newRange.maxX = (maxX > endDate) ? this.getDateFormat(endDate) : range.maxX;
      return newRange;
    });
    console.log(newRanges);

    this.ranges$.next(newRanges);
    this.rangeData$.next(newRanges.map(range => {
      return {
        name: range.name,
        series: [
          {name: new Date(range.minX), value: range.limitPoints[0].value },
          {name: new Date(range.maxX), value: range.limitPoints[0].value },
        ]
      };
    }));
  }

  getDateFormat(foo: Date) {
    const monthvalue = foo.getMonth() + 1 ;
    const month = (foo.getMonth() < 10) ? '0' + monthvalue : monthvalue;
    const date = (foo.getDate() < 10) ? '0' + foo.getDate() : foo.getDate();
    return (foo.getFullYear() + '-' + month + '-' + date);
  }

}
