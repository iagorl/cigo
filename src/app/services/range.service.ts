import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, ChartData } from './data.service';
import { ViewService } from './view.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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
  // activated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  activated$: Observable<boolean>;
  subscription: Subscription;

  alerts: {};

  constructor(
    private dataservice: DataService,
    private view: ViewService,
  ) {
    this.possibleID = 0;
    this.ranges = [];
    this.ranges$ = new BehaviorSubject<Range[]>(this.ranges);
    this.rangeData$ = new BehaviorSubject<ChartData[]>([]);
    this.activated$ = this.view.activeView$.map(val => val === 'range');

    this.subscription = Observable.combineLatest(this.view.activeField$, this.view.activeFase$)
      .subscribe(([field, fase]) => {
        this.sendRange(field, fase);
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

  addRange(name: string, minX: string, maxX: string, limitPoints: Offset[]) {
    console.log(name, minX, maxX, limitPoints);
    const newRange = {
      'id': this.possibleID,
      'name': name,
      'minX': minX,
      'maxX': maxX,
      'limitPoints': limitPoints,
      'field': this.view.field,
    };
    this.possibleID += 1;
    this.ranges.push(newRange);
    this.ranges$.next(this.ranges);
    this.rangeData$.next(this.ranges.map(range => {
      return {
        name: name,
        series: [
          {name: new Date(minX), value: limitPoints[0].value },
          {name: new Date(maxX), value: limitPoints[0].value },
        ]
      };
    }));
    this.dataservice.studyData(newRange);
  }

  editRange(id: number, name: string, minX: string, maxX: string, limitPoints: Offset[]) {
    const index = this.ranges.findIndex(comment => comment.id === id);
    const newRange = {
      'id': id,
      'name': name,
      'minX': minX,
      'maxX': maxX,
      'limitPoints': limitPoints
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

}
