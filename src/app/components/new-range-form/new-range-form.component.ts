import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-range-form',
  templateUrl: './new-range-form.component.html',
  styleUrls: ['./new-range-form.component.scss']
})
export class NewRangeFormComponent implements OnInit, OnChanges {
  range = {
    name: '',
    minX: '',
    maxX: '',
    value: 0,
    condition: 'gt'
  };

  @Input() selectedX: string;
  @Input() selectedY: number;
  @Input() openFormContainer = false;

  @Output() toggleForm = new EventEmitter();
  @Output() createRange = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: any): void {
    if (changes.selectedX || changes.selectedY) {
      this.range.minX = this.selectedX;
    this.range.value = this.selectedY;
    }
  }

  ngOnInit() {
  }

  toggleContainer() {
    this.toggleForm.emit();
    if (!this.openFormContainer) {
      this.resetForm();
    }
  }

  saveRange() {
    this.createRange.emit(this.range);
    this.toggleContainer();
    this.resetForm();
  }

  resetForm() {
    this.range = {
      name: '',
      minX: '',
      maxX: '',
      value: 0,
      condition: 'gt'
    };
  }

}
