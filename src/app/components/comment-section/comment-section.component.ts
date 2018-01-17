import { Component, OnInit } from '@angular/core';
import { CommentsService, Comment } from '../../services/comments.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comments$: Observable<Comment[]>;
  active$: Observable<number|null>;
  activated: boolean = false;

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.comments$ = this.commentService.comments$;
    this.active$ = this.commentService.activeComment$.map(elem => elem ? elem.id : null);
  }

  toggle() {
    this.commentService.toggle();
  }

  activateComment(id: number) {
    this.commentService.toogleComment(id);
  }

}
