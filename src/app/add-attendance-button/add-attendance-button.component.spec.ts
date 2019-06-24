import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendanceButtonComponent } from './add-attendance-button.component';

describe('AddAttendanceButtonComponent', () => {
  let component: AddAttendanceButtonComponent;
  let fixture: ComponentFixture<AddAttendanceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttendanceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendanceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
