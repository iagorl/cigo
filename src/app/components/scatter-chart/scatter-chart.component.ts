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
        {value: 'Distancia', text: 'Distancia'},
        {value: 'Extraccion', text: 'Extraccion'},
        {value: 'Oper. Truck', text: 'Oper. Truck'},
        {value: 'Remanejo', text: 'Remanejo'},
        {value: 'Velocidad', text: 'Velocidad'},
      ],
      selected: 'Distancia'
    },
    {
      name: 'KPI2',
      options: [
        {value: 'Distancia', text: 'Distancia'},
        {value: 'Extraccion', text: 'Extraccion'},
        {value: 'Oper. Truck', text: 'Oper. Truck'},
        {value: 'Remanejo', text: 'Remanejo'},
        {value: 'Velocidad', text: 'Velocidad'},
      ],
      selected: 'Extraccion'
    },
    {
      name: 'KPI3',
      options: [
        {value: 'Distancia', text: 'Distancia'},
        {value: 'Extraccion', text: 'Extraccion'},
        {value: 'Oper. Truck', text: 'Oper. Truck'},
        {value: 'Remanejo', text: 'Remanejo'},
        {value: 'Velocidad', text: 'Velocidad'},
      ],
      selected: 'Oper. Truck'
    },
    {
      name: 'Fase',
      options: [
        {value: 'Casino 2', text: 'Casino 2'},
        {value: 'Donoso 1', text: 'Donoso 1'},
        {value: 'Donoso 2', text: 'Donoso 2'},
        {value: 'Infiernillo 5', text: 'Infiernillo 5'},
        {value: 'Infirenillo 7A', text: 'Infirenillo 7A'},
        {value: 'Total Fases', text: 'Total Fases'},
      ],
      selected: 'Total Fases'
    },
  ];

  selectedFase: string = 'Total Fases';
  selectedKey: string = 'x';
  selectedField: string = 'Distancia';

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
            color: 'rgba(217, 217, 217, 0.14)',
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
        this.data.changeScatterData('x', event.value, this.selectedFase);
        break;
        case 'KPI2':
        this.selectedKey = 'y';
        this.fieldY = event.value;
        this.selectedField = event.value;
        this.data.changeScatterData('y', event.value, this.selectedFase);
        break;
        case 'KPI3':
        this.selectedKey = 'z';
        this.fieldZ = event.value;
        this.selectedField = event.value;
        this.data.changeScatterData('z', event.value, this.selectedFase);
        break;
      case 'Fase':
        this.selectedFase = event.value;
        this.data.changeScatterData(this.selectedKey, this.selectedField, event.value);
        break;
    }
  }

}
