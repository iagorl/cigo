import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Comment } from '../../../services/comments.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() coordX: string;
  @Input() coordY: number;
  title: string;
  text: string;

  @Output() submit = new EventEmitter<Comment>();
  @Output() cancel = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onSubmit() {
    this.submit.emit({
      title: this.title,
      text: this.text,
      coordinates: {
        x: this.coordX,
        y: this.coordY
      }
    });
  }

  onCancel() {
    this.cancel.emit();
  }

}
