import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucometryComponent } from './glucometry.component';

describe('GlucometryComponent', () => {
  let component: GlucometryComponent;
  let fixture: ComponentFixture<GlucometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
