import { Component } from '@angular/core';
import { LoginService } from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco ERP';
 
  constructor(public loginservice : LoginService) {
    
   }

  ngOnInit() {
    this.showStatus();
  }

  showStatus():void{
    console.log("Login Status : "+this.loginservice.isAdmin);

  }
}
