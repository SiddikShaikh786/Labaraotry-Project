import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhaemotolgyComponent } from './viewhaemotolgy.component';

describe('ViewhaemotolgyComponent', () => {
  let component: ViewhaemotolgyComponent;
  let fixture: ComponentFixture<ViewhaemotolgyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhaemotolgyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhaemotolgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
