import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CgiPageComponent } from './pages/cgi/cgi.component';
import { ParetoPageComponent } from './pages/pareto/pareto.component';

const routes: Routes = [
  { path: '', redirectTo: 'control', pathMatch: 'full'},
  { path: 'control', component: CgiPageComponent },
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


