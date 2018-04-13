import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco ERP';
  admin = false;
  constructor(public loginservice : LoginService,private router : Router) {
    
   }

  ngOnInit() {
    console.log("sd:"+localStorage.getItem("UserType"));
    if(localStorage.getItem("UserType") == "admin"){
      this.admin = true;  
      this.loginservice.isAdmin=true;
    }
    console.log("admin"+this.admin)
  }



  logOut() : void{
    localStorage.clear();
    this.loginservice.isAdmin=false;
    this.router.navigate(["/loginapi"]);
  }
}
