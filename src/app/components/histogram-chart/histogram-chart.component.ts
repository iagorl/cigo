import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewChild } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  styleUrls: ['./histogram-chart.component.scss']
})
export class HistogramChartComponent implements OnInit {

  @Input() fieldOptions;
  @Output() change = new EventEmitter();

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  data$: Observable<ChartData[]>;
  showChart: boolean = false;
  width: number;
  height: number;


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Extraction Amount';
  showYAxisLabel = true;
  yAxisLabel = 'Frecuency';
  finalData: any;

  colorScheme = {
    domain: ['#1a76ff']
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.width = this.target.element.nativeElement.getBoundingClientRect().width;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    this.dataService.dataHist$.subscribe(data => {
      if (data.length > 0) {
        this.processData(data[0].series);
      }
    });
  }

  processData(dataArray) {
    const rng = [99, 165, 198, 231, 264, 297, 330, 363, 396];
    const reverseRng = rng.reverse();
    const resultData = [];
    reverseRng.map(elem => resultData.push({name: '' + elem, value: 0}));
    dataArray.map(data => {
      let i = 0;
      for (const range of reverseRng) {
        if (range <= data.value) {
          resultData[i].value += 1;
          break;
        }
        i += 1;
      }
    });
    this.finalData = resultData.reverse();
    this.showChart = true;
  }

  doChange(event) {
    this.change.emit(event);
  }

  onSelect(event) {
    console.log('aQUI');
  }
}
