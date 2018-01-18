import { Component, OnInit } from '@angular/core';
import { CommentsService, Comment, Coordinates } from '../../services/comments.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { ViewService } from '../../services/view.service';


@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comments$: Observable<Comment[]>;
  active$: Observable<number|null>;
  activeCoords$: Observable<Coordinates>;

  constructor(private commentService: CommentsService, private viewService: ViewService) { }

  ngOnInit() {
    this.comments$ = this.commentService.comments$.do(d => console.log('comments', d));
    this.active$ = this.commentService.activeComment$.map(elem => elem ? elem.id : null);
    this.commentService.activated$.do(val => {
      if (!val) {
        this.onCancel();
      }
    }).subscribe();

    this.activeCoords$ = this.commentService.activeCoordinates$;
  }

  toggle(event) {
    this.viewService.activate(event ? 'comment' : '');
  }

  activateComment(id: number) {
    this.commentService.toogleComment(id);
  }

  addComment(comment) {
    this.commentService.addComment(comment.title, comment.text, comment.coordinates);
    this.onCancel();
  }

  onCancel() {
    this.commentService.activateCoordinate();
  }

}
