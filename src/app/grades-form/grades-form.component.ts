import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent implements OnInit, AfterViewInit {
  @ViewChild('course', {static: false}) course: any;

  totalsTotal: number = 1999;

  students: string[] = [
    'gary',
    'barry',
    'larry',
    'sarah',
    'clara',
    'dara',
    'schmara',
    'fofara'
  ]

  courseId: number = this.students.length;

  courseTitle: string = "Communications w/ Aliens 510";

  courseTitles: string[] = [
    'Communications 42',
  ]

  scores: number[] = [
    2,
    12,
    42,
    55,
    75,
    22,
    99,
    420
  ]

  totals: number[] = [
    26,
    123,
    42,
    555,
    7,
    22,
    999,
    40
  ]

  fart: number = 12

  classes: string[] = [
    "fart",
    "poop",
    "shart",
    "plop",
    "fnop"
  ]

  assignments: any[] = [
    {
      assignment: "essay",
      total: 420
    },
    {
      assignment: "exam",
      total: 42
    },
    {
      assignment: "final",
      total: 40
    },
    {
      assignment: "test",
      total: 20
    },
    {
      assignment: "quiz",
      total: 10
    },
    {
      assignment: "doctoral thesis",
      total: 1000
    }
  ]

  confirm(param) {
    console.log(this.course.nativeElement.id); 
  }

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.course);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.course);
  }

}
