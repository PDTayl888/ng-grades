import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextTransformerDirective } from './grades-form/texttransform.directive' ;


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { GradesFormComponent } from './grades-form/grades-form.component';
import { AddAttendanceButtonComponent } from './add-attendance-button/add-attendance-button.component';
import { AddCoursePopupComponent } from './add-course-button/add-course-popup/add-course-popup.component';
import { AddStudentButtonComponent } from './add-student-button/add-student-button.component';
import { AddAssignmentButtonComponent } from './add-assignment-button/add-assignment-button.component';
import { AddStudentPopupComponent } from './add-student-button/add-student-popup/add-student-popup.component';
import { AddAssignmentPopupComponent } from './add-assignment-button/add-assignment-popup/add-assignment-popup.component';
import { AddAttendancePopupComponent } from './add-attendance-button/add-attendance-popup/add-attendance-popup.component';
import { CreateElementDirective } from './directives/create-element.directive';
import { AppendChildDirective } from './directives/append-child.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddCourseButtonComponent,
    GradesFormComponent,
    AddAttendanceButtonComponent,
    TextTransformerDirective,
    AddCoursePopupComponent,
    AddStudentButtonComponent,
    AddAssignmentButtonComponent,
    AddStudentPopupComponent,
    AddAssignmentPopupComponent,
    AddAttendancePopupComponent,
    CreateElementDirective,
    AppendChildDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
