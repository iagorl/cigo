import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRangeFormComponent } from './new-range-form.component';

describe('NewRangeFormComponent', () => {
  let component: NewRangeFormComponent;
  let fixture: ComponentFixture<NewRangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
