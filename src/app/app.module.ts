import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsService } from './services/comments.service';
import { DataService } from './services/data.service';
import { RangeService } from './services/range.service';
import { TargetService } from './services/target.service';
import { ViewService } from './services/view.service';

import { ControlChartComponent } from './components/control-chart/control-chart.component';
import { ComboComponent } from './components/control-chart/combo/combo.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardListingComponent } from './components/card-listing/card-listing.component';
import { CardComponent } from './components/card/card.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentComponent } from './components/comment-section/comment/comment.component';
import { NewRangeFormComponent } from './components/new-range-form/new-range-form.component';
import { InputComponent } from './components/comment-section/input/input.component';
import { FilterComponent } from './components/filter/filter.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { ParetoChartComponent } from './components/pareto-chart/pareto-chart.component';
import { TableComponent } from './components/table/table.component';
import { ParetoComboComponent } from './components/pareto-chart/combo/combo.component';
import { ParetoVerticalSeriesComponent } from './components/pareto-chart/vertical-series/vertical-series.component';

import { CgiPageComponent } from './pages/cgi/cgi.component';
import { ParetoPageComponent } from './pages/pareto/pareto.component';
import { FuelPageComponent } from './pages/fuel/fuel.component';
import { WaterfallChartComponent } from './components/waterfall-chart/waterfall-chart.component';
import { HistogramChartComponent } from './components/histogram-chart/histogram-chart.component';
import { CigoPageComponent } from './pages/cigo/cigo.component';
import { CigoDataService } from './services/cigo-data.service';

const Components = [
  ControlChartComponent,
  ComboComponent,
  TopBarComponent,
  SidebarComponent,
  CardListingComponent,
  CardComponent,
  CommentSectionComponent,
  CommentComponent,
  NewRangeFormComponent,
  InputComponent,
  FilterComponent,
  ScatterChartComponent,
  TableComponent,
  ParetoChartComponent,
  ParetoComboComponent,
  ParetoVerticalSeriesComponent
];

const Pages = [
  ParetoPageComponent,
  CgiPageComponent,
  FuelPageComponent,
  CigoPageComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Pages,
    WaterfallChartComponent,
    HistogramChartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule,
    NgxChartsModule,
    NgxDatatableModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    CommentsService,
    RangeService,
    ViewService,
    CigoDataService,
    TargetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
