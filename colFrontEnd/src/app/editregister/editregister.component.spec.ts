import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregisterComponent } from './editregister.component';

describe('EditregisterComponent', () => {
  let component: EditregisterComponent;
  let fixture: ComponentFixture<EditregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditregisterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
