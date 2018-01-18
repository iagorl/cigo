import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Coordinates } from '../../../services/comments.service';

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

  @Output() submit = new EventEmitter<{text: string, coordinates: Coordinates}>();
  @Output() cancel = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onSubmit() {
    this.submit.emit({
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
