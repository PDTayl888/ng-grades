import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentButtonComponent } from './add-assignment-button.component';

describe('AddAssignmentButtonComponent', () => {
  let component: AddAssignmentButtonComponent;
  let fixture: ComponentFixture<AddAssignmentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
