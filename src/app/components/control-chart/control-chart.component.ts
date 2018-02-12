import { Component, OnInit, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { RangeService, Offset } from '../../services/range.service';
import { ViewService } from '../../services/view.service';
import { Observable } from 'rxjs/Observable';
import { CommentsService, Comment } from '../../services/comments.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import { TargetService } from '../../services/target.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-control-chart',
  templateUrl: './control-chart.component.html',
  styleUrls: ['./control-chart.component.scss']
})
export class ControlChartComponent implements OnInit {
  currentFase: any = 'Total Fases';
  currentKpi: any = 'Distancia';
  currentTipo: any = 'Camion';
  currentFlota: any = 'all';

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() pageDescriptor: string;

  @Input() fieldOptions;
  @Input() budgetOptions;
  initialDate: Date;
  finalDate: Date;
  minDate: Date;
  maxDate: Date;
  @Output() change = new EventEmitter();
  @Output() changeDate = new EventEmitter();


  colorScheme = {
    domain: []
  };
  width: number;
  height: number;
  gradient = true;
  showXAxis = true;
  showYAxis = true;
  @Input() showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Total Fases Extraction';
  autoScale = true;
  animations = false;
  selectedX = '';
  selectedY = 0;

  data$: Observable<ChartData[]>;
  targetData$: Observable<ChartData[]>;
  rangeData$: Observable<ChartData[]>;
  fullData$: Observable<ChartData[]>;
  comments$: Observable<any[]>;
  fullComments$: Observable<any[]>;
  commentsVisible: boolean;
  commentsVisible$: Observable<boolean>;
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
    this.height -= 110;
    this.dataService.colorSet$.do(set => this.colorScheme = {domain: set}).subscribe();
    this.viewService.activeView$.do( view => this.selectedView = view.length ? true : false).subscribe();
    if (this.pageDescriptor === 'cdi') {
      this.setCdiPage();
    } else {
      this.setFuelPage();
    }

    this.commentsVisible$ = this.commentService.activated$.do(data => this.commentsVisible = data);
    this.activeComment$ = this.commentService.activeComment$.map(comment => {
      if (!comment) {
        return [];
      }
      return [{
        name: 'Comment',
        series: [
          {
            name: comment.target,
            id: comment.id,
            y: comment.coordinates.y,
            x: new Date(comment.coordinates.x),
            radius: 5,
          }
        ]
      }];
    });
    this.comments$ = this.commentService.comments$.map(comments => {
      return comments.map((comment) => {
        return {
          name: 'Comment',
          series: [
            {
              name: comment.target,
              id: comment.id,
              y: comment.coordinates.y,
              x: new Date(comment.coordinates.x),
              radius: 5,
            }
          ]
        };
      });
    });
    this.fullComments$ = Observable.combineLatest(this.comments$, this.commentService.activeCoordinates$)
      .map(data => {
        if (data[1]) {
          return [
            ...data[0],
            {
              name: 'Placeholder',
              series: [
                {
                  name: `: Placeholder`,
                  y: data[1].y,
                  x: new Date(data[1].x),
                  radius: 5,
                }
              ]
            }
          ];
        } else {
          return data[0];
        }
      });
  }

  setFuelPage() {
    this.targetData$ = new BehaviorSubject([]);
    this.rangeData$ = this.rangeService.rangeData$;
    this.data$ = this.dataService.dataControlFuel$;
    this.initialDate = this.dataService.fuelInitDay;
    this.finalDate = this.dataService.fuelEndDay;
    this.minDate = this.dataService.fuelInitDay;
    this.maxDate = this.dataService.fuelEndDay;
    this.fullData$ = Observable.combineLatest(this.data$, this.targetData$, this.rangeData$)
    .map(data => {
      return [...data[0], ...data[1], ...data[2]];
  });
  }

  setCdiPage() {
    this.targetData$ = this.targetService.target$;
    this.rangeData$ = this.rangeService.rangeData$;
    this.initialDate = this.dataService.cdiInitDay;
    this.finalDate = this.dataService.cdiEndDay;
    this.minDate = this.dataService.cdiInitDay;
    this.maxDate = this.dataService.cdiEndDay;
    this.data$ = this.dataService.dataControl$;
    this.fullData$ = Observable.combineLatest(this.data$, this.targetData$, this.rangeData$)
    .map(data => {
      return [...data[0], ...data[1], ...data[2]];
  });
  }

  onSelect(event) {
    this.activateCoordinate(this.formatDate(event.name), event.value);
  }

  onClicked(event) {
    this.selectedX = this.formatDate(event.xScale);
    this.selectedY = event.yScale;
    this.activateCoordinate(this.selectedX, event.yScale);
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
    switch (event.field) {
      case 'Tipo':
        this.currentTipo = event.value;
        break;
      case 'Flota':
        this.currentFlota = event.value;
        break;
      case 'KPI':
        this.currentKpi = event.value;
        break;
      case 'Fase':
        this.currentFase = event.value;
        break;
    }
    this.change.emit(event);
  }
  onChangeDate(event, target) {
    (target === 'final') ? this.finalDate = event.value : this.initialDate = event.value;
    if (this.pageDescriptor === 'cdi') {
      console.log('aqui');
      this.dataService.changeData(this.currentKpi, this.currentFase, this.initialDate, this.finalDate);
      this.targetService.changeTargetData(this.initialDate, this.finalDate);
      this.rangeService.changeRangeData(this.initialDate, this.finalDate);
    } else {
      this.dataService.changeFuelData(this.currentTipo, this.currentFlota, this.initialDate, this.finalDate);
    }

  }
}
