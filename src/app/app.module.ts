import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

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
import { FormsModule } from '@angular/forms';
import { NewRangeFormComponent } from './components/new-range-form/new-range-form.component';
import { InputComponent } from './components/comment-section/input/input.component';
import { ViewService } from './services/view.service';
import { RangeService } from './services/range.service';
import { FilterComponent } from './components/filter/filter.component';
import { TargetService } from './services/target.service';


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
    CommentComponent,
    NewRangeFormComponent,
    InputComponent,
    FilterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    NgxChartsModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    CommentsService,
    RangeService,
    ViewService,
    TargetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
