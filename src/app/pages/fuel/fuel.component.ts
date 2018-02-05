import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})
export class FuelPageComponent {

  title = 'app';
  fieldOptions2 = [
    {
      name: 'Field_Target',
      options: [
        {value: 'litros', text: 'litros'},
        {value: 'consumo', text: 'consumo'},
        {value: 'energia', text: 'energia'},
        {value: 'co2_equiv', text: 'co2_equiv'},
        {value: 'movimiento_total', text: 'movimiento_total'},
        {value: 'l_kt', text: 'l_kt'},
        {value: 'tiempo_operativo', text: 'tiempo_operativo'},
        {value: 'l_h', text: 'l_h'},
        {value: 'dist_media', text: 'dist_media'},
        {value: 'l_kt_km', text: 'l_kt_km'},
        {value: 't_h', text: 't_h'},
        {value: 'kt_km', text: 'kt_km'},
      ],
      selected: 'litros'
    },
  ];
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
        {value: 'CAT 795F', text: 'CAT 795F'},
        {value: 'KOM 830E', text: 'KOM 830E'},
        {value: 'KOM 930E', text: 'KOM 930E'},
        {value: 'KOM 960E', text: 'KOM 960E'},
      ],
      selected: 'CAT 795F'
    },
    {
      name: 'Equipo',
      options: [
        { value: 'CAC201', text: 'CAC201'},
        { value: 'CAC202', text: 'CAC202'},
        { value: 'CAC203', text: 'CAC203'},
        { value: 'CAC204', text: 'CAC204'},
        { value: 'CAC205', text: 'CAC205'},
        { value: 'CAC206', text: 'CAC206'},
        { value: 'CAC207', text: 'CAC207'},
        { value: 'CAC208', text: 'CAC208'},
        { value: 'CAC209', text: 'CAC209'},
        { value: 'CAC210', text: 'CAC210'},
        { value: 'CAC211', text: 'CAC211'},
        { value: 'CDH16', text: 'CDH16'},
        { value: 'CDH17', text: 'CDH17'},
        { value: 'CDH19', text: 'CDH19'},
        { value: 'CDH20', text: 'CDH20'},
        { value: 'CDH21', text: 'CDH21'},
        { value: 'CDH22', text: 'CDH22'},
        { value: 'CDH24', text: 'CDH24'},
        { value: 'CDH25', text: 'CDH25'},
        { value: 'CDH39', text: 'CDH39'},
        { value: 'CDH40', text: 'CDH40'},
        { value: 'CDH41', text: 'CDH41'},
        { value: 'CDH42', text: 'CDH42'},
        { value: 'CDH43', text: 'CDH43'},
        { value: 'CDH44', text: 'CDH44'},
        { value: 'CDH45', text: 'CDH45'},
        { value: 'CDH46', text: 'CDH46'},
        { value: 'CDH47', text: 'CDH47'},
        { value: 'CDH48', text: 'CDH48'},
        { value: 'CDH49', text: 'CDH49'},
        { value: 'CDH50', text: 'CDH50'},
        { value: 'CDH51', text: 'CDH51'},
        { value: 'CDH52', text: 'CDH52'},
        { value: 'CDH53', text: 'CDH53'},
        { value: 'CDH54', text: 'CDH54'},
        { value: 'CDH55', text: 'CDH55'},
        { value: 'CDH56', text: 'CDH56'},
        { value: 'CDH57', text: 'CDH57'},
        { value: 'CDH58', text: 'CDH58'},
        { value: 'CDH59', text: 'CDH59'},
        { value: 'CDH60', text: 'CDH60'},
        { value: 'CDH61', text: 'CDH61'},
        { value: 'CDH62', text: 'CDH62'},
        { value: 'CDH63', text: 'CDH63'},
        { value: 'CDH64', text: 'CDH64'},
        { value: 'CDH65', text: 'CDH65'},
        { value: 'CDH66', text: 'CDH66'},
        { value: 'CDH67', text: 'CDH67'},
        { value: 'CDH68', text: 'CDH68'},
        { value: 'CDH69', text: 'CDH69'},
        { value: 'CDH70', text: 'CDH70'},
        { value: 'CDH71', text: 'CDH71'},
        { value: 'CDH72', text: 'CDH72'},
        { value: 'CDH73', text: 'CDH73'},
        { value: 'CDH74', text: 'CDH74'},
        { value: 'CDH75', text: 'CDH75'},
        { value: 'CDH76', text: 'CDH76'},
        { value: 'CDH77', text: 'CDH77'},
        { value: 'CDH78', text: 'CDH78'},
        { value: 'CDH79', text: 'CDH79'},
        { value: 'CDH80', text: 'CDH80'},
        { value: 'CDH81', text: 'CDH81'},
        { value: 'CDH82', text: 'CDH82'},
        { value: 'CDH83', text: 'CDH83'},
        { value: 'CDH84', text: 'CDH84'},
        { value: 'CDH85', text: 'CDH85'},
        { value: 'CDH86', text: 'CDH86'},
        { value: 'CDH87', text: 'CDH87'},
        { value: 'CDH88', text: 'CDH88'},
        { value: 'CDH89', text: 'CDH89'},
        { value: 'CDH90', text: 'CDH90'},
        { value: 'CDH91', text: 'CDH91'},
        { value: 'CDH92', text: 'CDH92'},
        { value: 'CDH93', text: 'CDH93'},
        { value: 'CDH94', text: 'CDH94'},
        { value: 'CDH101', text: 'CDH101'},
        { value: 'CDH102', text: 'CDH102'},
      ],
      selected: 'CAC201'
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

}
