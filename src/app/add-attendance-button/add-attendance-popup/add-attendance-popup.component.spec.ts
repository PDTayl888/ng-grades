import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendancePopupComponent } from './add-attendance-popup.component';

describe('AddAttendancePopupComponent', () => {
  let component: AddAttendancePopupComponent;
  let fixture: ComponentFixture<AddAttendancePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttendancePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendancePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
