import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workHistory = [
    {
      name: "Taylor Logistics",
      pos: "E-com Line Lead",
      location: "Cincinnati, OH",
      year: "2021-2022",
    },
    {
      name: "Sam Ash Music",
      pos: "Operations Manager",
      location: "Cincinnati, OH",
      year: "1997-2021",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
