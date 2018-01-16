import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Comment } from '../../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  @HostBinding('class.active')
  @Input() active: boolean;


  constructor() { }

  ngOnInit() {
  }

}
