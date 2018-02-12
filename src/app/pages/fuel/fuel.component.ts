import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})
export class FuelPageComponent {

  title = 'app';

  fieldOptions = [
    {
      name: 'Tipo',
      options: [
        {value: 'Camion', text: 'Camion'},
      ],
      selected: 'Camion'
    },
    {
      name: 'Flota',
      options: [
        {value: 'all', text: 'Todas las flotas'},
        {value: 'CAT 795F', text: 'CAT 795F'},
        {value: 'KOM 830E', text: 'KOM 830E'},
        {value: 'KOM 930E', text: 'KOM 930E'},
        {value: 'KOM 960E', text: 'KOM 960E'},
      ],
      selected: 'all'
    },
    {
      name: 'Field_Target',
      options: [
        {value: 'litros', text: 'Litros'},
        {value: 'consumo', text: 'Consumo'},
        {value: 'energia', text: 'Energia'},
        {value: 'co2_equiv', text: 'CO2 Equiv'},
        {value: 'movimiento_total', text: 'Movimiento Total'},
        {value: 'l_kt', text: 'l/kt'},
        {value: 'tiempo_operativo', text: 'Tiempo'},
        {value: 'l_h', text: 'l/h'},
        {value: 'dist_media', text: 'Distancia Media'},
        {value: 'l_kt_km', text: 'l/(kt*km)'},
        {value: 't_h', text: 't/h'},
        {value: 'kt_km', text: 'kt*km'},
      ],
      selected: 'litros'
    },
  ];

  budgetOptions = {
    name: 'Budget',
    options: [
      // {value: 'WK', text: 'Weekly'},
      // {value: 'ST', text: 'Monthly'},
      // {value: 'OL', text: 'Outlook'},
      // {value: 'BUDGET', text: 'Budget'},
    ],
    selected: 'WK'
  };

  constructor(private view: ViewService) {}

  test(event) {
    switch (event.field) {
      case 'Tipo':
        this.view.changeTipo(event.value);
        break;
      case 'Flota':
        this.view.changeFlota(event.value);
        break;
      case 'Equipo':
        this.view.changeEquipo(event.value);
        break;
      case 'Field_Target':
        this.view.changeFuelTarget(event.value);
        break;
    }
  }
  onChangeDate(event) {
    console.log(event);
  }

}
