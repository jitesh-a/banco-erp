import { Component } from '@angular/core';
import { TestingService } from "../app/testing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco ERP';
  login : boolean;
  usertype : string;
  constructor(public testingservice : TestingService) {
    
   }

  ngOnInit() {
    this.showStatus();
  }

  showStatus():void{
    console.log("Login Status : "+this.testingservice.isAdmin);

  }
}
