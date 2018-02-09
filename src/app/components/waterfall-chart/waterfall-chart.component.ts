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
  waterfallInit: number = 0;
  waterfallTotal: number = 0;
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
    const yDataProfit = [0];
    const yDataCost = [0];
    const yDataBase = [0];
    let totalTarget = 0;
    let totalValue = 0;

    dataArray.series.map((data, index) => {
      if (targetArray.series[index]) {
        totalTarget += targetArray.series[index].value;
      }
      totalValue += data.value;
    });
    const yDataRevenue = [totalTarget];
    let previousY = totalTarget;

    let dateDummy = new Date(dataArray.series[0].name);
    dateDummy.setDate(dateDummy.getDate() - 1);
    xData.push(dateDummy);
    let finalIndex = 0;
    dataArray.series.map((data, index) => {
      xData.push(new Date(data.name));

      const value = (targetArray.series[index]) ?
        data.value - (targetArray.series[index].value) : data.value;

      yDataBase.push(previousY);
      yDataRevenue.push(0);

      if (value < 0) {
        yDataCost.push(value);
        yDataProfit.push(0);
      } else {
        yDataCost.push(0);
        yDataProfit.push(value);
      }

      previousY = previousY + value;
      finalIndex = index;
    });
    dateDummy = new Date(dataArray.series[finalIndex].name);
    dateDummy.setDate(dateDummy.getDate() + 1);
    xData.push(dateDummy);
    yDataProfit.push(0);
    yDataCost.push(0);
    yDataBase.push(0);
    yDataRevenue.push(totalValue);
    this.waterfallTotal = totalValue;
    this.waterfallInit = totalTarget;
    this.drawWaterfall(yDataProfit, yDataCost, yDataBase, xData, yDataRevenue);
  }

  drawWaterfall(yDataProfit, yDataCost, yDataBase, xData, yDataRevenue) {

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
    const trace4 = {
      x: xData,
      y: yDataRevenue,
      type: 'bar',
      marker: {
        color: 'rgba(55,128,191,0.7)',
        line: {
          color: 'rgba(55,128,191,1.0)',
          width: 2
        }
      }
    };

    const data = [trace1, trace2, trace3, trace4];

    const layout = {
      barmode: 'stack',
      width: this.width,
      height: this.height - 40,
      showlegend: false,
      annotations: [],
      margin: {
        l: 50,
        r: 50,
        b: 20,
        t: 20,
        pad: 4
      },
    };

    Plotly.newPlot(this.test.element.nativeElement, data, layout, {displayModeBar: false});
  }

  doChange(event) {
    this.change.emit(event);
  }
}
