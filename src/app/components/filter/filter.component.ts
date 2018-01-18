import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FieldDescription {
  name: string;
  options: FieldOption[];
  selected?: any;
}

export interface FieldOption {
  value: any;
  text: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() options: FieldDescription[] = [];
  @Input() targetOptions: FieldDescription;
  @Input() scatter: boolean = false;

  @Output() change = new EventEmitter<{field: string, value: any}>();

  constructor() { }

  ngOnInit() {
  }

  emit(field: string, value: any) {
    this.change.emit({field, value});
  }
}
