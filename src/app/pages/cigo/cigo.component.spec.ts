import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CigoComponent } from './cigo.component';

describe('CigoComponent', () => {
  let component: CigoComponent;
  let fixture: ComponentFixture<CigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
