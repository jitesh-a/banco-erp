import { Component, OnInit } from '@angular/core';
import { TestingService } from "../testing.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private testingservice : TestingService) { }

  ngOnInit() {
    this.show();
  }

  show():void{
    console.log("Login Status : "+this.testingservice.isAdmin);
  }
}
