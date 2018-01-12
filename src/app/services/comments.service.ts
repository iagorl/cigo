import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Comments {
  id: number;
  text: string;
  coordinates: number[];
  active: boolean;
}

@Injectable()
export class CommentsService {

  possibleID: number;
  comments: Comments[];
  comments$: BehaviorSubject<Comments[]>;

  constructor() {
    this.possibleID = 0;
    this.comments = [];
    this.comments$ = new BehaviorSubject<Comments[]>(this.comments);
  }

  addComment(text: string, coordinates: number[]) {
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
