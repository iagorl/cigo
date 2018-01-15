import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';

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

  alerts: {};

  constructor(
    private dataservice: DataService
  ) {
    this.possibleID = 0;
    this.ranges = [];
    this.ranges$ = new BehaviorSubject<Range[]>(this.ranges);
  }

  addRange(name: string, minX: string, maxX: string, limitPoints: Offset[]) {
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
