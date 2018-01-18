import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from '../../services/view.service';
import { RangeService } from '../../services/range.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.scss']
})
export class CardListingComponent implements OnInit {

  warnings$: Observable<any[]>;
  ranges$: Observable<any[]>;
  filter: string;

  @Input() commentList = false;

  constructor(private dataService: DataService, private rangeService: RangeService, private viewService: ViewService) { }

  ngOnInit() {
    this.viewService.activeField$.do( filter => this.filter = filter).subscribe();
    this.warnings$ = this.dataService.warning$.map( data => {
      return data.map(warning => {
        if (warning.hasOwnProperty(this.filter)) {
          return warning[this.filter]['0'];
        }
      });
    });

    this.ranges$ = this.rangeService.ranges$;
  }

  toggle() {
    this.viewService.activate('range');
  }

  formatWarningContent(data: any[]): string {
    let content = '';
    const limits = data.map( elem => {
      if (elem.condition) {
        content = `${content}
        - From ${this.formatDate(elem.first)} to ${this.formatDate(elem.last)}.`;
      }
    });
    return content;
  }

  formatRangeContent(data: any): string {
    const limitValue = Math.round(data.limitPoints[0].value * 100) / 100;
    if (data.minX && data.maxX) {
      return `From ${data.minX} to ${data.maxX} the limit value is ${limitValue}`;
    }
    if (data.minX) {
      return `From ${data.minX} the limit value is ${limitValue}`;
    }
    if (data.maxX) {
      return `Until ${data.minX} the limit value is ${limitValue}`;
    }
  }

  formatDate(selectedDate): string {
    const date = selectedDate.toLocaleDateString().split('/');
    return `${date[2]}-${date[0]}-${date[1]}`;
  }

}
