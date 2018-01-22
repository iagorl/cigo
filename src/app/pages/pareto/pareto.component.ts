import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareto',
  templateUrl: './pareto.component.html',
  styleUrls: ['./pareto.component.scss']
})
export class ParetoPageComponent implements OnInit {
  fieldOptions = [
    {
      name: 'Equipo',
      options: [
        {value: 'LB1', text: 'LB Chancado Primario Nº1'},
        {value: 'LB2', text: 'LB Chancado Primario Nº2'},
      ],
      selected: 'LB1'
    },
    {
      name: 'Analisis',
      options: [
        {value: 'dateRange', text: 'Rango de Fechas'},
      ],
      selected: 'dateRange'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
