import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatListModule } from '@angular/material/list';


import { AppComponent } from './app.component';
import { ControlChartComponent } from './components/control-chart/control-chart.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ComboComponent } from './components/control-chart/combo/combo.component';
import { CommentsService } from './services/comments.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardListingComponent } from './components/card-listing/card-listing.component';
import { CardComponent } from './components/card/card.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentComponent } from './components/comment-section/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlChartComponent,
    ComboComponent,
    TopBarComponent,
    SidebarComponent,
    CardListingComponent,
    CardComponent,
    CommentSectionComponent,
    CommentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatListModule,
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
