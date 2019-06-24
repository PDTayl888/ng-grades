import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  hideCourse: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    console.log(this.hideCourse);
    this.hideCourse = ! this.hideCourse;
  }

}
