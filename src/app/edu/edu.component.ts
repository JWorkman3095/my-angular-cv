import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  education = [
    {
      school: "MAX Tech Training",
      degree: "Full Stack Software Developer",
      location: "Cincinnati, OH",
      year: "2022",
    },
    {
      school: "Northern KY Univerty",
      degree: "General Studies",
      location: "Heighland Heights, KY",
      year: "1992",
    },
    {
      school: "Perice College",
      degree: "A.S. in Technology",
      location: "Tacoma, WA",
      year: "1991 - 92",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
