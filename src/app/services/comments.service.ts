import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Comments {
  id: number;
  text: string;
  coordinates: {
    x: any,
    y: any
  };
  active: boolean;
}

@Injectable()
export class CommentsService {

  possibleID: number;
  comments: Comments[];
  comments$: BehaviorSubject<Comments[]>;

  constructor() {
    this.possibleID = 1;
    this.comments = [{
      id: 0,
      text: 'My First Comment',
      coordinates: {x: '2011-10-13', y: 5},
      active: false
    }];
    this.comments$ = new BehaviorSubject<Comments[]>(this.comments);
  }

  addComment(text: string, coordinates: {x: any, y: any}) {
    const newComment = {
      'id': this.possibleID,
      'text': text,
      'coordinates':  coordinates,
      'active': true
    };
    this.possibleID += 1;
    this.comments.push(newComment);
    this.comments$.next(this.comments);
  }

  toogleComment(id: number) {
    const index = this.comments.findIndex(comment => comment.id === id);
    const newComment = this.comments[index];
    newComment.active = !newComment.active;
    const newComments = [
      ...this.comments.slice(0, index),
      newComment,
      ...this.comments.slice(index + 1),
    ];
    this.comments = newComments;
    this.comments$.next(newComments);
  }

  deleteComment(id: number) {
    const index = this.comments.findIndex(comment => comment.id === id);
    this.comments.splice(index, 1);
    this.comments$.next(this.comments);
  }


}
