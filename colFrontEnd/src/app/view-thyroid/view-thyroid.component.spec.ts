import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThyroidComponent } from './view-thyroid.component';

describe('ViewThyroidComponent', () => {
  let component: ViewThyroidComponent;
  let fixture: ComponentFixture<ViewThyroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewThyroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewThyroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
