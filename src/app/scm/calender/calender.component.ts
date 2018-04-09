import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
packs=[
  {
    id:1,
    "name":"Full Cream Milk",
  },
  {
    id:2,
    "name":"Full Cream Milk",
  },
  {
    id:3,
    "name":"Full Cream Milk",
  }
]

  constructor() { }

  ngOnInit() {
  }

}
