import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { FusionChartModel } from "../../models/fusion-chart.model";
import { EventService } from "../event.service";
import { ErrorStateMatcher } from '@angular/material';
import { ErrorHandler } from '@angular/core/src/error_handler';
import { Router } from "@angular/router";
import { SessionService } from "../session.service";
declare const $;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    id = 'chart1';
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource1;
    dataSource2;

  constructor(public loginservice : LoginService,private eventService:EventService,private router:Router,private session : SessionService) { 
 
  }

  ngOnInit() {
    this.show();
    this.renderChartData();
    $('.carousel').carousel()
  }

  show():void{
    console.log("Login Status : "+this.loginservice.isAdmin);
  }

  renderChartData():void{
    this.eventService.renderIncomeChartData()
    .subscribe(resIncome=>{
      console.log(resIncome);

      this.dataSource1 = {
        "chart": {
            "caption": "Banco's Income Chart",
            "numberprefix": "₹",
            "theme": "fint"
        },
        "data": resIncome["data"]
    }

    },err=>{
      console.log(err);
    })

    this.eventService.renderExpenseChartData()
    .subscribe(resExpense=>{
      console.log(resExpense);

      this.dataSource2 = {
        "chart": {
            "caption": "Expense",
            "subCaption": "",
            "numberprefix": "₹",
            "theme": "fint"
        },
        "data": resExpense["data"]
    }

    },err=>{
      console.log(err);
    })
  }

  

 


}
