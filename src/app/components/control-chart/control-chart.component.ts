import { Component, OnInit } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-control-chart',
  templateUrl: './control-chart.component.html',
  styleUrls: ['./control-chart.component.scss']
})
export class ControlChartComponent implements OnInit {
  colorScheme = {
    domain: ['blue', 'red', 'green']
  };
  gradient = true;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Day';
  yAxisLabel = 'Total Fases Extraction';
  autoScale = true;
  animations = false;
  referenceLines = [
    {name: 'Some Name', value: 6}
  ];

  data$: Observable<ChartData[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data$ = this.dataService.data$;
  }

  onSelect(event) {
    console.log(event);
  }

}
