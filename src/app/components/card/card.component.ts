import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() color: string;
  @Input() title: string = 'Limit title';
  @Input() content: string = 'Limit values';

  constructor() { }

  ngOnInit() {
  }

}
