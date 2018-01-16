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

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.comments$ = this.commentService.comments$;
    this.active$ = this.commentService.activeComment$;
  }

}
