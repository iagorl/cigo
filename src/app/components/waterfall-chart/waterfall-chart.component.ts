import { Component, OnInit, ViewChild, ViewContainerRef, Output, EventEmitter, Input } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { TargetService } from '../../services/target.service';
import { Observable } from 'rxjs/Observable';

declare var Plotly: any;

@Component({
  selector: 'app-waterfall-chart',
  templateUrl: './waterfall-chart.component.html',
  styleUrls: ['./waterfall-chart.component.scss']
})
export class WaterfallChartComponent implements OnInit {
  height: any;
  width: any;

  @ViewChild('test', { read: ViewContainerRef }) test: ViewContainerRef;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  @Input() fieldOptions;
  @Output() change = new EventEmitter();

  fullData$: Observable<any[]>;

  constructor(
    private dataService: DataService,
    private targetService: TargetService,
  ) { }

  ngOnInit() {

    this.width = this.target.element.nativeElement.getBoundingClientRect().width;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    const data$ = this.dataService.dataControl$;
    const targetData$ = this.targetService.target$;

    Observable.combineLatest(data$, targetData$)
    .map(data => {
      return [...data[0], ...data[1]];
    }).subscribe(data => {
      if (data.length > 1) {
        this.processData(data[0], data[1]);
      }
    });
  }

  processData(dataArray, targetArray) {
    const xData = [];
    const yDataProfit = [];
    const yDataCost = [];
    const yDataBase = [];
    let previousY = 0;

    dataArray.series.map((data, index) => {
      xData.push(new Date(data.name));
      const value = data.value - targetArray.series[index].value;

      yDataBase.push(previousY);

      if (value < 0) {
        yDataCost.push(value);
        yDataProfit.push(0);
      } else {
        yDataCost.push(0);
        yDataProfit.push(value);
      }

      previousY = previousY + value;

    });
    this.drawWaterfall(yDataProfit, yDataCost, yDataBase, xData);
  }

  drawWaterfall(yDataProfit, yDataCost, yDataBase, xData) {

    // Base
    const trace1 = {
      x: xData,
      y: yDataBase,
      name: 'Acumulative',
      marker: {
        color: 'rgba(1,1,1,0.0)'
      },
      type: 'bar'
    };

    // Profit
    const trace2 = {
      x: xData,
      y: yDataProfit,
      type: 'bar',
      name: 'Positive',
      marker: {
        color: 'rgba(50,171, 96, 0.7)',
        line: {
          color: 'rgba(50,171,96,1.0)',
          width: 2
        }
      }
    };

    // Cost
    const trace3 = {
      x: xData,
      y: yDataCost,
      name: 'Negative',
      type: 'bar',
      marker: {
        color: 'rgba(219, 64, 82, 0.7)',
        line: {
          color: 'rgba(219, 64, 82, 1.0)',
          width: 2
        }
      }
    };

    const data = [trace1, trace2, trace3];

    const layout = {
      barmode: 'stack',
      width: this.width,
      height: this.height - 40,
      showlegend: false,
      annotations: []
    };

    Plotly.newPlot(this.test.element.nativeElement, data, layout);
  }

  doChange(event) {
    this.change.emit(event);
  }
}
