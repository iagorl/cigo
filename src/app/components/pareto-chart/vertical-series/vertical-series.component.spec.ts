import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSeriesComponent } from './vertical-series.component';

describe('VerticalSeriesComponent', () => {
  let component: VerticalSeriesComponent;
  let fixture: ComponentFixture<VerticalSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
