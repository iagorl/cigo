import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Comment {
  id: number;
  text: string;
  title: string;
  coordinates: {
    x: any,
    y: any
  };
  active: boolean;
}

@Injectable()
export class CommentsService {

  possibleID: number;
  comments: Comment[];
  comments$: BehaviorSubject<Comment[]>;
  activeComment: Comment;
  activeComment$: BehaviorSubject<Comment|null>;
  activated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.possibleID = 1;
    this.comments = [{
      id: 0,
      title: 'My First Comment',
      text: 'My First Comment',
      coordinates: {x: '2011-10-13', y: 5},
      active: false
    }, {
      id: 1,
      title: 'My Second Comment',
      text: 'My Second Comment',
      coordinates: {x: '2011-07-13', y: 5},
      active: false
    }
    ];
    this.comments$ = new BehaviorSubject<Comment[]>(this.comments);
    this.activeComment$ = new BehaviorSubject<Comment|null>(null);
  }

  addComment(title: string, text: string, coordinates: {x: any, y: any}) {
    const newComment = {
      'id': this.possibleID,
      'text': text,
      'title': title,
      'coordinates':  coordinates,
      'active': true
    };
    this.possibleID += 1;
    this.comments.push(newComment);
    this.comments$.next(this.comments);
  }

  toogleComment(id: number|null) {
    if (this.activeComment && this.activeComment.id === id) {
      this.activeComment = null;
    } else {
      this.activeComment = id !== null ? this.comments.find(elem => elem.id === id) : null;
    }
    this.activeComment$.next(this.activeComment);
  }

  deleteComment(id: number) {
    const index = this.comments.findIndex(comment => comment.id === id);
    this.comments.splice(index, 1);
    this.comments$.next(this.comments);
  }

  toggle() {
    this.activated$.next(!this.activated$.getValue());
  }


}
