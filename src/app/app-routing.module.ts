import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CdiPageComponent } from './pages/cdi/cdi.component';
import { HomePageComponent } from './pages/home/home.component';
import { ParetoPageComponent } from './pages/pareto/pareto.component';
import { FuelPageComponent } from './pages/fuel/fuel.component';
import { CigoPageComponent } from './pages/cigo/cigo.component';

const routes: Routes = [
  { path: '', component: CigoPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
