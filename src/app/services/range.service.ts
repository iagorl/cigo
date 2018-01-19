import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, ChartData } from './data.service';

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
  activated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  alerts: {};

  constructor(
    private dataservice: DataService
  ) {
    this.possibleID = 0;
    this.ranges = [];
    this.ranges$ = new BehaviorSubject<Range[]>(this.ranges);
    this.rangeData$ = new BehaviorSubject<ChartData[]>([]);
  }

  addRange(name: string, minX: string, maxX: string, limitPoints: Offset[]) {
    console.log(name, minX, maxX, limitPoints);
    const newRange = {
      'id': this.possibleID,
      'name': name,
      'minX': minX,
      'maxX': maxX,
      'limitPoints': limitPoints
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

  toggle(force = false) {
    this.activated$.next(force ? false : !this.activated$.getValue());
  }

}
