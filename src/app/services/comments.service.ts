import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Target, ViewService } from './view.service';
import { TargetService } from './target.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


export interface CommentData {
  Fecha: string;
  KPI_nombre: string;
  Fase: string;
  tipo_target: Target;
  comentario: string;
}

export interface Comment {
  id: number;
  text: string;
  kpi: string;
  target: Target;
  fase: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  x: any;
  y: any;
}

@Injectable()
export class CommentsService {
  comments: Comment[];
  comments$: Observable<Comment[]>;
  innerComments$: BehaviorSubject<Comment[]>;
  activeComment: Comment;
  activeComment$: BehaviorSubject<Comment|null>;
  activeCoordinates: Coordinates;
  activeCoordinates$: BehaviorSubject<Coordinates|null>;
  activated$: Observable<boolean>;

  constructor(private http: HttpClient, private target: TargetService, private view: ViewService) {
    this.comments = [];
    this.target.target$.map(d => d.length > 0).take(2).subscribe(val => {
      if (val && this.comments.length === 0) {
        this.getComments();
      }
    });
    this.activated$ = this.view.activeView$.map(val => val === 'comment');

    this.innerComments$ = new BehaviorSubject<Comment[]>(this.comments);
    this.comments$ = Observable.combineLatest(this.innerComments$, this.view.activeFase$, this.view.activeField$, this.view.activeTarget$)
      .map(([comments, fase, field, activeTarget]) => {
        return comments.filter((comment) => {
          return comment.fase === fase && comment.kpi === field && comment.target === activeTarget;
        });
      });
    this.activeComment$ = new BehaviorSubject<Comment|null>(null);
    this.activeCoordinates$ = new BehaviorSubject<Coordinates|null>(null);
  }

  getComments() {
    this.http.get<CommentData[]>('/assets/comments.json').subscribe((data) => {
      data.map((d, idx) => {
        this.comments.push({
          id: idx,
          text: d.comentario,
          kpi: d.KPI_nombre,
          target: d.tipo_target,
          fase: d.Fase,
          coordinates: {
            x: new Date(d.Fecha),
            y: this.target.getValue(d.tipo_target, d.KPI_nombre, d.Fase, d.Fecha)
          }
        });
      });
    });
  }

  addComment(title: string, text: string, coordinates: {x: any, y: any}) {
    const newComment = {
      id: this.comments.length + 1,
      text: text,
      kpi: this.view.field,
      target: this.view.activeTarget,
      fase: this.view.fase,
      coordinates: {
        x: new Date(coordinates.x),
        y: this.target.getValue(this.view.activeTarget, this.view.field, this.view.fase, coordinates.x)
      }
    };
    this.comments.push(newComment);
    this.innerComments$.next(this.comments);
  }

  toogleComment(id: Date|number|null) {
    if (id === null) {
      this.activeComment = null;
      this.activeComment$.next(null);
      return;
    }

    if (typeof id === 'number') {
      if (this.activeComment && this.activeComment.id === id) {
        this.activeComment = null;
      } else {
        this.activeComment = id !== null ? this.comments.find(elem => elem.id === id) : null;
      }
    } else {
      if (this.activeComment && this.activeComment.coordinates.x === id) {
        this.activeComment = null;
      } else {
        this.activeComment = id !== null ? this.comments.find(elem => {
          return elem.coordinates.x === id;
        }) : null;
      }
    }
    this.activeComment$.next(this.activeComment);
  }

  deleteComment(id: number) {
    const index = this.comments.findIndex(comment => comment.id === id);
    this.comments.splice(index, 1);
    this.innerComments$.next(this.comments);
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
