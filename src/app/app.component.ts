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
  
}



