import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Jeff Workman";
  add: string = "3095 Diehl Rd. | Cincinnati, OH 45211 | jworkhollr@aol.com | 513-479-6569";
  tech: string[] = [ 
    "git", "gitHub", "Angular", "C#", "java", "javaScript", "BootStrap","Spring",
    "html", "web Api", ".Net"
  ];
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
      year: "1991",
    },
  ]

}



