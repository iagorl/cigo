import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import { ControlChartComponent } from './components/control-chart/control-chart.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ComboComponent } from './components/control-chart/combo/combo.component';
import { CommentsService } from './services/comments.service';


@NgModule({
  declarations: [
    AppComponent,
    ControlChartComponent,
    ComboComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
