import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { RangeService, Offset } from '../../services/range.service';
import { Observable } from 'rxjs/Observable';
import { CommentsService, Comment } from '../../services/comments.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import { TargetService } from '../../services/target.service';

declare var Plotly: any;

@Component({
  selector: 'app-control-chart',
  templateUrl: './control-chart.component.html',
  styleUrls: ['./control-chart.component.scss']
})
export class ControlChartComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  @ViewChild('test', { read: ViewContainerRef }) test: ViewContainerRef;

  colorScheme = {
    domain: ['#1774F0', 'red']
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
    // this.width -= 100;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    this.height -= 60;
    this.data$ = this.dataService.data$;
    this.targetData$ = this.targetService.target$;
    this.fullData$ = Observable.combineLatest(this.data$, this.targetData$)
      .map(data => {
        return [...data[0], ...data[1]];
      });
    this.commentsVisible$ = this.commentService.activated$.do(data => this.commentsVisible = data);
    this.activeComment$ = this.commentService.activeComment$.map(comment => {
      if (!comment) {
        return [];
      }
      return [{
        name: 'a',
        series: [
          {
            name: comment.title,
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
          name: 'a',
          series: [
            {
              name: comment.title,
              y: comment.coordinates.y,
              x: new Date(comment.coordinates.x),
              radius: 5,
            }
          ]
        };
      });
    }).do(d => console.log(d));
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
  test4() {
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv',
      (err, rows) => {
        function unpack(rows, key) {
          return rows.map(function(row)
          { return row[key]; });
        }

        const trace1 = {
          x: unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
          mode: 'markers',
          marker: {
            size: 12,
            line: {
            color: 'rgba(217, 217, 217, 0.14)',
            width: 0.5},
            opacity: 0.8},
          type: 'scatter3d'
        };

        // const trace2 = {
        //   x: unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
        //   mode: 'markers',
        //   marker: {
        //     color: 'rgb(127, 127, 127)',
        //     size: 12,
        //     symbol: 'circle',
        //     line: {
        //     color: 'rgb(204, 204, 204)',
        //     width: 1},
        //     opacity: 0.8},
        //   type: 'scatter3d'};

        const data = [trace1];
        // console.log(data);
          const layout = {
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0,
            },
            scene: {

              xaxis: {
                title: 'x Axis',
                titlefont: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
              yaxis: {
                title: 'y Axis',
                titlefont: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
              zaxis: {
                title: 'y Axis',
                titlefont: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              }
            }
          };
        Plotly.newPlot(this.test.element.nativeElement, data, layout);
      });
  }

  onHover(event: {name: string, series: {name: string, radius: number, x: Date, y: number}[]}) {
    this.commentService.toogleComment(event ? event.series ? event.series[0].name : null : null);
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

}
