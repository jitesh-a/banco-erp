import { Component, OnInit } from '@angular/core';
import { Login } from "../../models/login.model";
import { LoginService } from "../login.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login(); 
  constructor(private loginService:LoginService,private route:ActivatedRoute,
  private location:Location,
  private router : Router) { }


  ngOnInit() {
    
  }

  checkCredential(): void {
    this.loginService.checkCredential(this.login)
      .subscribe(
        res=>{
            if(!res["success"]){
              alert("Invalid Credentials");
            }
            else{
              this.loginService.isAdmin = true;
              localStorage.setItem("UserType","admin");
              localStorage.setItem("UserId",res["user"].Id);
              localStorage.setItem("UserName",res["user"].UserName);
              console.log("Values added");
              this.router.navigate( ['/dashboard']);
            }
          //  this.router.navigate(['/dashboard']);
        }
      ); 
  }


}
