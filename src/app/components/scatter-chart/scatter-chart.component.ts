import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from '../../services/data.service';

declare var Plotly: any;

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {

  @ViewChild('test', { read: ViewContainerRef }) test: ViewContainerRef;
  fieldX: string = 'Distancia';
  fieldY: string = 'Extraccion';
  fieldZ: string = 'Oper. Truck';

  constructor(
    private data: DataService
  ) { }

  fieldOptions = [
    {
      name: 'KPI1',
      options: [
        {value: 'litros', text: 'Litros'},
        {value: 'consumo', text: 'Consumo'},
        {value: 'energia', text: 'Energia'},
        {value: 'co2_equiv', text: 'co2_equiv'},
        {value: 'movimiento_total', text: 'Movimiento Total'},
        {value: 'l_kt', text: 'l_kt'},
        {value: 'tiempo_operativo', text: 'Tiempo Operativo'},
        {value: 'l_h', text: 'l_h'},
        {value: 'dist_media', text: 'Dist.Media'},
        {value: 'l_kt_km', text: 'l_kt_km'},
        {value: 't_h', text: 't_h'},
        {value: 'kt_km', text: 'kt_km'},
      ],
      selected: 'consumo'
    },
    {
      name: 'KPI2',
      options: [
        {value: 'litros', text: 'Litros'},
        {value: 'consumo', text: 'Consumo'},
        {value: 'energia', text: 'Energia'},
        {value: 'co2_equiv', text: 'co2_equiv'},
        {value: 'movimiento_total', text: 'Movimiento Total'},
        {value: 'l_kt', text: 'l_kt'},
        {value: 'tiempo_operativo', text: 'Tiempo Operativo'},
        {value: 'l_h', text: 'l_h'},
        {value: 'dist_media', text: 'Dist.Media'},
        {value: 'l_kt_km', text: 'l_kt_km'},
        {value: 't_h', text: 't_h'},
        {value: 'kt_km', text: 'kt_km'},
      ],
      selected: 'movimiento_total'
    },
    {
      name: 'KPI3',
      options: [
        {value: 'litros', text: 'Litros'},
        {value: 'consumo', text: 'Consumo'},
        {value: 'energia', text: 'Energia'},
        {value: 'co2_equiv', text: 'co2_equiv'},
        {value: 'movimiento_total', text: 'Movimiento Total'},
        {value: 'l_kt', text: 'l_kt'},
        {value: 'tiempo_operativo', text: 'Tiempo Operativo'},
        {value: 'l_h', text: 'l_h'},
        {value: 'dist_media', text: 'Dist.Media'},
        {value: 'l_kt_km', text: 'l_kt_km'},
        {value: 't_h', text: 't_h'},
        {value: 'kt_km', text: 'kt_km'},
      ],
      selected: 'dist_media'
    },
  ];

  selectedKey: string = 'x';
  selectedField: string = 'litros';

  ngOnInit() {
    this.drawScatter();
  }

  unpack(data, key) {
    return data[key].series.map(elem => {
      return elem.value;
    });
  }

  drawScatter() {
    this.data.dataScatter$.subscribe(elem => {
      if (elem['x'] !== null && elem['y'] !== null && elem['z'] !== null) {
        const data = [{
          x: this.unpack(elem, 'x'), y: this.unpack(elem, 'y'), z: this.unpack(elem, 'z'),
          mode: 'markers',
          marker: {
            size: 5,
            line: {
            color: 'rgba(0, 0, 0, 0.75)',
            width: 0.5},
            opacity: 1},
          type: 'scatter3d'
        }];
        const layout = {
          margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
          },
          scene: {
            xaxis: {
              title: this.fieldX,
              titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
              }
            },
            yaxis: {
              title: this.fieldY,
              titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
              }
            },
            zaxis: {
              title: this.fieldZ,
              titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
              }
            }
          }
        };
        Plotly.newPlot(this.test.element.nativeElement, data, layout);
      }
    });
  }

  doChange(event) {
    switch (event.field) {
      case 'KPI1':
        this.selectedKey = 'x';
        this.fieldX = event.value;
        this.selectedField = event.value;
        this.data.changeScatterFuelData('x', event.value);
        break;
        case 'KPI2':
        this.selectedKey = 'y';
        this.fieldY = event.value;
        this.selectedField = event.value;
        this.data.changeScatterFuelData('y', event.value);
        break;
        case 'KPI3':
        this.selectedKey = 'z';
        this.fieldZ = event.value;
        this.selectedField = event.value;
        this.data.changeScatterFuelData('z', event.value);
        break;
    }
  }

}
