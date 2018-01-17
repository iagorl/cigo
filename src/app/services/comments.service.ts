import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Comment {
  id?: number;
  text: string;
  title: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  x: any;
  y: any;
}

@Injectable()
export class CommentsService {

  possibleID: number;
  comments: Comment[];
  comments$: BehaviorSubject<Comment[]>;
  activeComment: Comment;
  activeComment$: BehaviorSubject<Comment|null>;
  activeCoordinates: Coordinates;
  activeCoordinates$: BehaviorSubject<Coordinates|null>;
  activated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.possibleID = 2;
    this.comments = [{
      id: 0,
      title: 'My First Comment',
      text: 'My First Comment\'s description',
      coordinates: {x: '2011-10-13', y: 5},
    }, {
      id: 1,
      title: 'My Second Comment',
      text: 'My Second Comment\'s description',
      coordinates: {x: '2011-07-13', y: 5},
    }
    ];
    this.comments$ = new BehaviorSubject<Comment[]>(this.comments);
    this.activeComment$ = new BehaviorSubject<Comment|null>(null);
    this.activeCoordinates$ = new BehaviorSubject<Coordinates|null>(null);
  }

  addComment(title: string, text: string, coordinates: {x: any, y: any}) {
    const newComment = {
      'id': this.possibleID,
      'text': text,
      'title': title,
      'coordinates':  coordinates,
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

  toggle(force = false) {
    this.activated$.next(force ? false : !this.activated$.getValue());
  }

  activateCoordinate(x?: string, y?: number) {
    if (x && y) {
      this.activeCoordinates = {x, y};
    } else {
      this.activeCoordinates = null;
    }
    this.activeCoordinates$.next(this.activeCoordinates);
  }

}
