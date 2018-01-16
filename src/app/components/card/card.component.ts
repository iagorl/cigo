import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() color: string;
  @Input() title: string = 'Title';
  @Input() content: string = 'Content';

  constructor() { }

  ngOnInit() {
  }

}
