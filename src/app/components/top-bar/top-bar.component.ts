import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  headerTitle: string = '';
  constructor(
    _router: Router,
    _location: Location
  ) {
    this.router = _router;
    this.location = _location;
  }

  ngOnInit() {
    this.router.events.subscribe(() =>
      this.headerTitle = this.generateTitle(this.location.path())
    )
  }

  generateTitle(path) {
    switch (path) {
      case '/cdi':
        return 'Control Diario Integrado';
      case '/pareto':
        return 'Eventos Planta';
      case '/fuel':
        return 'Fuel Managment';
      case '/cigo':
        return 'CIGO'
      default:
        return 'Reportes';
    }
  }
}
