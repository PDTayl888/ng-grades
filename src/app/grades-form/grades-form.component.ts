import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent implements OnInit {
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

  classes: string[] = [
    "fart",
    "poop",
    "shart",
    "plop",
    "fnop"
  ]

  constructor() { }

  ngOnInit() {
  }

}
