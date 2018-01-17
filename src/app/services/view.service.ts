import { Injectable } from '@angular/core';
import { CommentsService } from './comments.service';
import { RangeService } from './range.service';

@Injectable()
export class ViewService {
  active: 'comment'|'range';

  constructor(private comments: CommentsService, private ranges: RangeService) { }

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

}
