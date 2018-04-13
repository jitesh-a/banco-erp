import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class SessionService {

  constructor(private router : Router) { 
    var userType = localStorage.getItem("UserType");
    var userName = localStorage.getItem("UserName");
    var userId = localStorage.getItem("UserId");
    if(userType== null || userName == null || userId == null){
        this.router.navigate( ['/loginapi']);
    }
    
  }

}
