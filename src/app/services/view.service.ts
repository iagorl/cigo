import { Injectable } from '@angular/core';
import { CommentsService } from './comments.service';
import { RangeService } from './range.service';
import { TargetService } from './target.service';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type Target = 'BUDGET'|'OL'|'ST'|'WK';
export type View = 'comment'|'range'|'';

@Injectable()
export class ViewService {
  active: View;
  activeTarget: Target = 'WK';
  field: string = 'Distancia';
  fase: string = 'Total Fases';

  activeView$: BehaviorSubject<View> = new BehaviorSubject<View>('');
  activeTarget$: BehaviorSubject<Target> = new BehaviorSubject<Target>(this.activeTarget);
  activeField$: BehaviorSubject<string> = new BehaviorSubject<string>(this.field);
  activeFase$: BehaviorSubject<string> = new BehaviorSubject<string>(this.fase);

  constructor(
    private target: TargetService,
    private data: DataService,
  ) { }

  activate(section: View) {
    this.active = section;
    this.activeView$.next(section);
  }

  changeTarget(target: Target) {
    this.activeTarget = target;
    this.activeTarget$.next(this.activeTarget);
    this.target.generateData(this.activeTarget, this.field, this.fase);
  }

  changeKPI(kpi: string) {
    this.field = kpi;
    this.activeField$.next(this.field);
    this.target.generateData(this.activeTarget, this.field, this.fase);
    this.data.changeData(this.field, this.fase);
  }

  changeFase(fase: string) {
    this.fase = fase;
    this.activeFase$.next(this.fase);
    this.target.generateData(this.activeTarget, this.field, this.fase);
    this.data.changeData(this.field, this.fase);
  }

}
