import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { RangeService, Offset } from '../../services/range.service';
import { Observable } from 'rxjs/Observable';
import { CommentsService, Comment } from '../../services/comments.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';


@Component({
  selector: 'app-control-chart',
  templateUrl: './control-chart.component.html',
  styleUrls: ['./control-chart.component.scss']
})
export class ControlChartComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

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
  comments$: Observable<any[]>;
  fullComments$: Observable<any[]>;
  commentsVisible: boolean;
  commentsVisible$: Observable<boolean>;
  activeComment$: Observable<any[]>;

  constructor(private dataService: DataService, private commentService: CommentsService, private rangeService: RangeService) { }

  ngOnInit() {
    this.width = this.target.element.nativeElement.getBoundingClientRect().width;
    // this.width -= 100;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    this.height -= 60;
    this.data$ = this.dataService.data$;
    this.commentsVisible$ = this.commentService.activated$.do(data => this.commentsVisible = data);
    this.activeComment$ = this.commentService.activeComment$.map(comment => {
      if (!comment) {
        return [];
      }
      return [{
        name: comment.id,
        series: [
          {
            name: 'Comments',
            y: comment.coordinates.y,
            x: new Date(comment.coordinates.x),
            radius: 10,
          }
        ]
      }];
    });
    this.comments$ = this.commentService.comments$.map(comments => {
      return comments.map((comment) => {
        return {
          name: '',
          series: [
            {
              name: comment.text,
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
      })
      .do(d => console.log(d));
  }

  onSelect(event) {
    const date = event.name.toLocaleDateString().split('/');
    this.activateCoordinate(`${date[2]}-${date[0]}-${date[1]}`, event.yScale);
  }

  onClicked(event) {
    console.log('clic', event);
    this.selectedX = event.xScale;
    this.selectedY = event.yScale;
    if (!this.openFormContainer && !this.commentsVisible) {
      this.toggleForm();
    }
    const date = event.xScale.toLocaleDateString().split('/');
    this.activateCoordinate(`${date[2]}-${date[0]}-${date[1]}`, event.yScale);
  }

  activateCoordinate(x, y) {
    if (this.commentsVisible) {
      this.commentService.activateCoordinate(x, y);
    }
  }

  onHover(event) {
    this.commentService.toogleComment(event.activate ? event.name : null);
    console.log('hover', event);
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
}
