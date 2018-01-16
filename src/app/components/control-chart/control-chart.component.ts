import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService, ChartData } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';
import { CommentsService } from '../../services/comments.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-control-chart',
  templateUrl: './control-chart.component.html',
  styleUrls: ['./control-chart.component.scss']
})
export class ControlChartComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  colorScheme = {
    domain: ['blue', 'red', 'rgba(255,255,0,0.5)']
  };
  width: number;
  height: number;
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

  data$: Observable<ChartData[]>;
  comments$: Observable<any[]>;

  constructor(private dataService: DataService, private commentService: CommentsService) { }

  ngOnInit() {
    this.width = this.target.element.nativeElement.getBoundingClientRect().width;
    this.width -= 100;
    this.height = this.target.element.nativeElement.getBoundingClientRect().height;
    this.height -= 60;
    this.data$ = this.dataService.data$;
    this.comments$ = this.commentService.comments$.map(comments => {
      return comments.map((comment) => {
        return {
          name: comment.id,
          series: [
            {
              name: 'Comments',
              y: comment.coordinates.y,
              x: new Date(comment.coordinates.x),
              radius: 100,
            }
          ]
        };
      });
    });
  }

  onSelect(event) {
    console.log('select', event);
  }

  onClicked(event) {
    console.log('clic', event);
  }

  onHover(event) {
    this.commentService.toogleComment(event.activate ? event.name : null);
    console.log('hover', event);
  }
}
