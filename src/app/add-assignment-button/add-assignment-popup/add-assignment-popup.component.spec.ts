import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentPopupComponent } from './add-assignment-popup.component';

describe('AddAssignmentPopupComponent', () => {
  let component: AddAssignmentPopupComponent;
  let fixture: ComponentFixture<AddAssignmentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
