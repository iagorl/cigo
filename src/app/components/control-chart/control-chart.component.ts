import { Component, OnInit } from '@angular/core';
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
  colorScheme = {
    domain: ['blue', 'red', 'rgba(255,255,0,0.5)']
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

  data$: Observable<ChartData[]>;
  comments$: Observable<any[]>;

  constructor(private dataService: DataService, private commentService: CommentsService) { }

  ngOnInit() {
    this.data$ = this.dataService.data$;
    this.comments$ = this.commentService.comments$.map(comments => {
      return comments.map((comment) => {
        return {
          name: 'Comments',
          series: [
            {
              name: comment.id,
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
    console.log(event);
  }
}
