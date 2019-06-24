import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { GradesFormComponent } from './grades-form/grades-form.component';
import { AddAttendanceButtonComponent } from './add-attendance-button/add-attendance-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddCourseButtonComponent,
    GradesFormComponent,
    AddAttendanceButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
