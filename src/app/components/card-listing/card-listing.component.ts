import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from '../../services/view.service';
import { RangeService } from '../../services/range.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.scss']
})
export class CardListingComponent implements OnInit {

  @Input() commentList: boolean = false;

  constructor(private rangeService: RangeService, private viewService: ViewService) { }

  ngOnInit() {
  }

  toggle() {
    this.viewService.activate('range');
  }

}
