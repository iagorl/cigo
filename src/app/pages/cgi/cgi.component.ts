import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-cgi',
  templateUrl: './cgi.component.html',
  styleUrls: ['./cgi.component.scss']
})
export class CgiPageComponent {
  title = 'app';
  fieldOptions = [
    {
      name: 'KPI',
      options: [
        {value: 'Distancia', text: 'Distancia'},
        {value: 'Extraccion', text: 'Extraccion'},
        {value: 'Oper. Truck', text: 'Oper. Truck'},
        {value: 'Remanejo', text: 'Remanejo'},
        {value: 'Velocidad', text: 'Velocidad'},
      ],
      selected: 'Distancia'
    },
    {
      name: 'Fase',
      options: [
        {value: 'Casino 2', text: 'Casino 2'},
        {value: 'Donoso 1', text: 'Donoso 1'},
        {value: 'Donoso 2', text: 'Donoso 2'},
        {value: 'Infiernillo 5', text: 'Infiernillo 5'},
        {value: 'Infiernillo 7A', text: 'Infiernillo 7A'},
        {value: 'Total Fases', text: 'Total Fases'},
      ],
      selected: 'Total Fases'
    },
  ];

  budgetOptions = {
    name: 'Budget',
    options: [
      {value: 'WK', text: 'Weekly'},
      {value: 'ST', text: 'Monthly'},
      {value: 'OL', text: 'Outlook'},
      {value: 'BUDGET', text: 'Budget'},
    ],
    selected: 'WK'
  };

  constructor(private view: ViewService) {}

  test(event) {
    switch (event.field) {
      case 'target':
        this.view.changeTarget(event.value);
        break;
      case 'KPI':
        this.view.changeKPI(event.value);
        break;
      case 'Fase':
        this.view.changeFase(event.value);
        break;
    }
  }
}
