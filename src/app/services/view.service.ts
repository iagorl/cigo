import { Injectable } from '@angular/core';
import { CommentsService } from './comments.service';
import { RangeService } from './range.service';
import { TargetService } from './target.service';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type Target = 'BUDGET'|'OL'|'ST'|'WK';
export type View = 'comment'|'range'|'';

@Injectable()
export class ViewService {
  fuelTarget: string = 'litros';
  fuelEquipo: string = 'CAC201';
  fuelFlota: string = 'CAT 795F';
  fuelTipo: string = 'Camion';
  active: View;
  activeTarget: Target = 'WK';
  field: string = 'Distancia';
  fase: string = 'Total Fases';

  activeView$: BehaviorSubject<View> = new BehaviorSubject<View>('');
  activeTarget$: BehaviorSubject<Target> = new BehaviorSubject<Target>(this.activeTarget);
  activeField$: BehaviorSubject<string> = new BehaviorSubject<string>(this.field);
  activeFase$: BehaviorSubject<string> = new BehaviorSubject<string>(this.fase);

  activeFuelTipo$: BehaviorSubject<string> = new BehaviorSubject<string>(this.fuelTipo);
  activeFuelFlota$: BehaviorSubject<string> = new BehaviorSubject<string>(this.fuelFlota);
  activeFuelEquipo$: BehaviorSubject<string> = new BehaviorSubject<string>(this.fuelEquipo);

  constructor(
    private target: TargetService,
    private data: DataService,
  ) { }

  activate(section: View) {
    this.active = section;
    this.activeView$.next(section);
  }

  changeTarget(target: Target) {
    this.activeTarget = target;
    this.activeTarget$.next(this.activeTarget);
    this.target.generateData(this.activeTarget, this.field, this.fase);
  }

  changeKPI(kpi: string) {
    this.field = kpi;
    this.activeField$.next(this.field);
    this.target.generateData(this.activeTarget, this.field, this.fase);
    this.data.changeData(this.field, this.fase);
  }

  changeFase(fase: string) {
    this.fase = fase;
    this.activeFase$.next(this.fase);
    this.target.generateData(this.activeTarget, this.field, this.fase);
    this.data.changeData(this.field, this.fase);
  }

  changeTipo(tipo: string) {
    this.fuelTipo = tipo;
    this.activeFuelTipo$.next(this.fuelTipo);
    // this.target.generateFuelData(this.fuelTipo, this.fuelFlota, this.fuelEquipo);
    this.data.changeFuelData(this.fuelTipo, this.fuelFlota);

  }

  changeFlota(flota: string) {
    this.fuelFlota = flota;
    this.activeFuelFlota$.next(this.fuelFlota);
    // this.target.generateFuelData(this.fuelTipo, this.fuelFlota, this.fuelEquipo);
    this.data.changeFuelData(this.fuelTipo, this.fuelFlota);
  }

  changeEquipo(equipo: string) {
    this.fuelEquipo = equipo;
    this.activeFuelEquipo$.next(this.fuelEquipo);
    // this.target.generateFuelData(this.fuelTipo, this.fuelFlota, this.fuelEquipo);
    this.data.changeFuelData(this.fuelTipo, this.fuelFlota);
  }

  changeFuelTarget(target: string) {
    this.fuelTarget = target;
    this.data.changeFuelControlData(this.fuelTarget);
  }

}
