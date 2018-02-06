import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-pareto',
  templateUrl: './pareto.component.html',
  styleUrls: ['./pareto.component.scss']
})
export class ParetoPageComponent implements OnInit {
  data$: BehaviorSubject<any[]>;
  fieldOptions = [
    {
      name: 'Equipo',
      options: [
        {value: '106', text: 'LB Chancado Primario Nº1'},
        {value: '107', text: 'LB Chancado Primario Nº2'},
        {value: '112', text: 'Circuito SAG 1'},
        {value: '113', text: 'Circuito SAG 2'},
        {value: '53', text: 'Molino SAG'},
      ],
      selected: '106'
    }
  ];

  columns = [
    {label: 'Index', value: 'name'},
    {label: 'Motivo y Falla', value: 'falla'},
    {label: 'Hrs', value: 'duracion'}
  ];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data$ = this.dataService.dataPareto$;
  }

  test(e) {
    this.dataService.chageParetoData(e.value);
  }

}
