import { Component, OnInit, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { RangeService, Offset } from '../../services/range.service';
import { Observable } from 'rxjs/Observable';
import { CommentsService, Comment } from '../../services/comments.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import { TargetService } from '../../services/target.service';


@Component({
  selector: 'app-control-chart',
  templateUrl: './control-chart.component.html',
  styleUrls: ['./control-chart.component.scss']
})
export class ControlChartComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() fieldOptions;
  @Input() budgetOptions;
  @Output() change = new EventEmitter();

  colorScheme = {
    domain: ['#1774F0', 'red', 'black']
  };
  width: number;
  height: number;
  gradient = true;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Total Fases Extraction';
  autoScale = true;
  animations = false;
  selectedX = '';
  selectedY = 0;
  openFormContainer = false;

  data$: Observable<ChartData[]>;
  targetData$: Observable<ChartData[]>;
  rangeData$: Observable<ChartData[]>;
  fullData$: Observable<ChartData[]>;
  comments$: Observable<any[]>;
  fullComments$: Observable<any[]>;
  commentsVisible: boolean;
  commentsVisible$: Observable<boolean>;
  activeComment$: Observable<any[]>;

  constructor(
    private dataService: DataService,
    private commentService: CommentsService,
    private rangeService: RangeService,
    private targetService: TargetService
  ) { }

  ngOnInit() {
    this.width = this.target.element.nativeElement.getBoundingClientRect().width;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    this.height -= 110;
    this.data$ = this.dataService.data$;
    this.targetData$ = this.targetService.target$;
    this.rangeData$ = this.rangeService.rangeData$;
    this.fullData$ = Observable.combineLatest(this.data$, this.targetData$, this.rangeData$)
      .map(data => {
        return [...data[0], ...data[1], ...data[2]];
      });
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

  onSelect(event) {
    this.activateCoordinate(this.formatDate(event.name), event.value);
  }

  onClicked(event) {
    this.selectedX = this.formatDate(event.xScale);
    this.selectedY = event.yScale;
    if (!this.openFormContainer && !this.commentsVisible) {
      this.toggleForm();
    }
    this.activateCoordinate(this.selectedX, event.yScale);
  }

  activateCoordinate(x, y) {
    if (this.commentsVisible) {
      this.commentService.activateCoordinate(x, y);
    }
  }

  onHover(event: {name: string, series: {name: string, id: number, radius: number, x: Date, y: number}[]}) {
    this.commentService.toogleComment(event ? event.series ? event.series[0].id : null : null);
  }

  toggleForm() {
    this.openFormContainer = !this.openFormContainer;
  }

  createRange(range: any) {
    const limitPoint: Offset[] = [{
      value: range.value,
      condition: range.condition
    }];
    this.rangeService.addRange(range.name, range.minX, range.maxX, limitPoint);
    this.dataService.setRange(range.name, range.minX, range.maxX, range.value);
    this.colorScheme.domain.push('black');
  }

  formatDate(selectedDate): string {
    const date = selectedDate.toLocaleDateString().split('/');
    return `${date[2]}-${date[0]}-${date[1]}`;
  }

  doChange(event) {
    this.change.emit(event);
  }
}
