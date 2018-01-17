import { Component, OnInit } from '@angular/core';
import { CommentsService, Comment, Coordinates } from '../../services/comments.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comments$: Observable<Comment[]>;
  active$: Observable<number|null>;
  activated: boolean = false;
  activeCoords$: Observable<Coordinates>;

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.comments$ = this.commentService.comments$;
    this.active$ = this.commentService.activeComment$.map(elem => elem ? elem.id : null);

    this.activeCoords$ = this.commentService.activeCoordinates$;
  }

  toggle() {
    this.commentService.toggle();
  }

  activateComment(id: number) {
    this.commentService.toogleComment(id);
  }

  addComment(comment) {
    this.commentService.addComment(comment.title, comment.text, comment.coordinates);
  }

  onCancel() {
    this.commentService.activateCoordinate();
  }

}
