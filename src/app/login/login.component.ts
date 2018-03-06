import { Component, OnInit } from '@angular/core';
import { Login } from "../../models/login.model";
import { LoginService } from "../login.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login(); 
  constructor(private loginService:LoginService,private route:ActivatedRoute,
  private location:Location) { }


  ngOnInit() {

    
  }



}
