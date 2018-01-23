import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-waterfall-chart',
  templateUrl: './waterfall-chart.component.html',
  styleUrls: ['./waterfall-chart.component.scss']
})
export class WaterfallChartComponent implements OnInit {

  @ViewChild('test', { read: ViewContainerRef }) test: ViewContainerRef;

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

  constructor() { }

  ngOnInit() {
    this.drawWaterfall();
  }

  drawWaterfall() {
    const xData = ['Product Revenue', 'Services Revenue', 'Total Revenue', 'FixedCosts',
    'Variable Costs', 'Total Costs', 'Total'];

    const yData = [400, 660, 660, 590, 400, 400, 340];

    const textList = ['$430K', '$260K', '$690K', '$-120K', '$-200K', '$-320K', '$370K'];

    // Base

    const trace1 = {
      x: xData,
      y: [0, 430, 0, 570, 370, 370, 0],
      marker: {
        color: 'rgba(1,1,1,0.0)'
      },
      type: 'bar'
    };

    // Revenue

    const trace2 = {
      x: xData,
      y: [430, 260, 690, 0, 0, 0, 0],
      type: 'bar',
      marker: {
        color: 'rgba(55,128,191,0.7)',
        line: {
          color: 'rgba(55,128,191,1.0)',
          width: 2
        }
      }
    };

    // Cost

    const trace3 = {
      x: xData,
      y: [0, 0, 0, 120, 200, 320, 0],
      type: 'bar',
      marker: {
        color: 'rgba(219, 64, 82, 0.7)',
        line: {
          color: 'rgba(219, 64, 82, 1.0)',
          width: 2
        }
      }
    };

    // Profit

    const trace4 = {
      x: xData,
      y: [0, 0, 0, 0, 0, 0, 370],
      type: 'bar',
      marker: {
        color: 'rgba(50,171, 96, 0.7)',
        line: {
          color: 'rgba(50,171,96,1.0)',
          width: 2
        }
      }
    };

    const data = [trace1, trace2, trace3, trace4];

    const layout = {
      title: 'Annual Profit 2015',
      barmode: 'stack',
      paper_bgcolor: 'rgba(245,246,249,1)',
      plot_bgcolor: 'rgba(245,246,249,1)',
      width: 600,
      height: 600,
      showlegend: false,
      annotations: []
    };

    for ( let i = 0 ; i < 7 ; i++ ) {
      const result = {
        x: xData[i],
        y: yData[i],
        text: textList[i],
        font: {
          family: 'Arial',
          size: 14,
          color: 'rgba(245,246,249,1)'
        },
        showarrow: false
      };
      layout.annotations.push(result);
    }

    Plotly.newPlot(this.test.element.nativeElement, data, layout);
  }

  doChange(event) {
    // switch (event.field) {
    //   case 'KPI1':
    //     this.selectedKey = 'x';
    //     this.fieldX = event.value;
    //     this.selectedField = event.value;
    //     this.data.changeScatterData('x', event.value, this.selectedFase);
    //     break;
    //     case 'KPI2':
    //     this.selectedKey = 'y';
    //     this.fieldY = event.value;
    //     this.selectedField = event.value;
    //     this.data.changeScatterData('y', event.value, this.selectedFase);
    //     break;
    //     case 'KPI3':
    //     this.selectedKey = 'z';
    //     this.fieldZ = event.value;
    //     this.selectedField = event.value;
    //     this.data.changeScatterData('z', event.value, this.selectedFase);
    //     break;
    //   case 'Fase':
    //     this.selectedFase = event.value;
    //     this.data.changeScatterData(this.selectedKey, this.selectedField, event.value);
    //     break;
    // }
  }
}
