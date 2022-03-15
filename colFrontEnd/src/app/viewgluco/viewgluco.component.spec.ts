import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewglucoComponent } from './viewgluco.component';

describe('ViewglucoComponent', () => {
  let component: ViewglucoComponent;
  let fixture: ComponentFixture<ViewglucoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewglucoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewglucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
