import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CgiPageComponent } from './pages/cgi/cgi.component';
import { ParetoPageComponent } from './pages/pareto/pareto.component';
import { FuelPageComponent } from './pages/fuel/fuel.component';
import { CigoPageComponent } from './pages/cigo/cigo.component';

const routes: Routes = [
  { path: '', redirectTo: 'cdi', pathMatch: 'full'},
  { path: 'fuel', component: FuelPageComponent },
  { path: 'cdi', component: CgiPageComponent},
  { path: 'cigo', component: CigoPageComponent },
  { path: 'pareto', component: ParetoPageComponent },
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


