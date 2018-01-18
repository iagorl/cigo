import { Injectable } from '@angular/core';
import { CommentsService } from './comments.service';
import { RangeService } from './range.service';
import { TargetService } from './target.service';

export type Target = 'BUDGET'|'OL'|'ST'|'WK';

@Injectable()
export class ViewService {
  active: 'comment'|'range';
  activeTarget: Target = 'BUDGET';
  field: string = 'Distancia';
  fase: string = 'Total Fases';

  constructor(private comments: CommentsService, private ranges: RangeService, private target: TargetService) { }

  activate(section: 'comment'|'range'|'') {
    if (section === '') {
      this.comments.toggle(true);
      this.ranges.toggle(true);
    } else {
      if (section === 'comment') {
        this.comments.toggle();
        this.ranges.toggle(true);
      } else {
        this.comments.toggle(true);
        this.ranges.toggle(false);
      }
    }
  }

  changeTarget(target: Target) {
    this.activeTarget = target;
    this.target.generateData(this.activeTarget, this.field, this.fase);
  }

}
