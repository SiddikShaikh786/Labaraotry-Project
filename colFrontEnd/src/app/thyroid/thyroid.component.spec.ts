import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThyroidComponent } from './thyroid.component';

describe('ThyroidComponent', () => {
  let component: ThyroidComponent;
  let fixture: ComponentFixture<ThyroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThyroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThyroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
