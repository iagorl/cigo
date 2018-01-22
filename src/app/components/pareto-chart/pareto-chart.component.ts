import { Component, OnInit, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartData, DataService } from '../../services/data.service';
import { CommentsService } from '../../services/comments.service';
import { RangeService } from '../../services/range.service';
import { TargetService } from '../../services/target.service';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.scss']
})
export class ParetoChartComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() fieldOptions;
  @Input() budgetOptions;
  @Output() change = new EventEmitter();

  colorScheme = {
    domain: ['#1774F0']
  };
  colorSchemeLine = {
    domain: ['red', '#1774F0']
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
  yAxisLabel = 'ATM';
  autoScale = true;
  animations = false;
  selectedX = '';
  selectedY = 0;

  data$: Observable<ChartData[]>;
  targetData$: Observable<ChartData[]>;
  rangeData$: Observable<ChartData[]>;
  fullData$: Observable<ChartData[]>;
  cummData$: Observable<ChartData[]>;
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
    this.data$ = this.dataService.dataPareto$;
    this.cummData$ = this.dataService.dataParetoCumm$.do(d => console.log(d));
    this.targetData$ = this.targetService.target$;
    this.rangeData$ = this.rangeService.rangeData$;
    this.viewService.activeView$.do( view => this.selectedView = view.length ? true : false).subscribe();
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
    this.change.emit(event);
  }
}
