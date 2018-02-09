import { Component, OnInit, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartData, DataService } from '../../services/data.service';
import { CommentsService } from '../../services/comments.service';
import { RangeService } from '../../services/range.service';
import { TargetService } from '../../services/target.service';
import { ViewService } from '../../services/view.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.scss']
})
export class ParetoChartComponent implements OnInit, OnDestroy {
  mainFilter: any = '106';
  originalData: any[];
  subscription: Subscription;
  finalDate: Date;
  initialDate: any;
  maxDate: Date;
  minDate: any;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() fieldOptions;
  @Input() budgetOptions;
  @Output() change = new EventEmitter();

  colorScheme = {
    domain: ['#1774F0']
  };
  colorSchemeLine = {
    domain: ['#1774F0', 'red']
  };
  width: number;
  height: number;
  gradient = true;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = true;
  xAxisLabel = 'Horas';
  yAxisLabel = 'Horas';
  autoScale = true;
  animations = false;
  selectedX = '';
  selectedY = 0;

  data$: ChartData[];
  targetData$: BehaviorSubject<ChartData[]>;
  rangeData$: Observable<ChartData[]>;
  fullData$: Observable<ChartData[]>;
  cummData$: BehaviorSubject<ChartData[]>;
  selectedView: boolean;
  activeComment$: Observable<any[]>;

  constructor(
    private dataService: DataService,
    private commentService: CommentsService,
    private rangeService: RangeService,
    private targetService: TargetService,
    private viewService: ViewService
  ) { }

  ngOnInit() {
    this.width = this.target.element.nativeElement.getBoundingClientRect().width;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    this.height -= 200;
    this.subscription = this.dataService.dataPareto$.subscribe(elem => {
      this.data$ = elem;
      this.originalData = elem;
      this.maxDate = this.dataService.paretoEndDay;
      this.minDate = this.dataService.paretoInitDay;
      this.initialDate = this.dataService.paretoInitDay;
      this.finalDate = this.dataService.paretoEndDay;
      this.getAcumulative();
    });

    this.targetData$ = this.targetService.target$;
    this.viewService.activeView$.do( view => this.selectedView = view.length ? true : false).subscribe();
  }

  getAcumulative() {
    this.cummData$ = new BehaviorSubject([]);
    let totalSum = 0;
    const chartsValue2 = this.data$.map((elem) => {
      totalSum = Number((totalSum + elem['value']).toFixed(2));
      return {
        name: elem['name'],
        value: totalSum
      };
    });
    this.cummData$.next([{name: 'Acumulado', series: chartsValue2}]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSelect(event) {
    this.activateCoordinate(this.formatDate(event.name), event.value);
  }

  activateCoordinate(x, y) {
    if (this.selectedView) {
      this.commentService.activateCoordinate(x, y);
    }
  }

  onHover(event: {name: string, series: {name: string, id: number, radius: number, x: Date, y: number}[]}) {
    this.commentService.toogleComment(event ? event.series ? event.series[0].id : null : null);
  }

  formatDate(selectedDate): string {
    const date = selectedDate.toLocaleDateString().split('/');
    return `${date[2]}-${date[0]}-${date[1]}`;
  }

  doChange(event) {
    this.mainFilter = event.value;
    this.change.emit(event);
  }

  changeDate(event, target) {
    (target === 'final') ? this.finalDate = event.value : this.initialDate = event.value;
    this.dataService.chageParetoData(this.mainFilter, this.initialDate, this.finalDate);
  }

}
