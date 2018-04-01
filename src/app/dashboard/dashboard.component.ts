import { Component, OnInit } from '@angular/core';
import { TestingService } from "../testing.service";
import { FusionChartModel } from "../../models/fusion-chart.model";
import { EventService } from "../event.service";
import { ErrorStateMatcher } from '@angular/material';
import { ErrorHandler } from '@angular/core/src/error_handler';

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
    dataSource;
    title = 'Angular4 FusionCharts Sample';

  constructor(private testingservice : TestingService,private eventService:EventService) { }

  ngOnInit() {
    this.show();
    this.renderChartData();
  }

  show():void{
    console.log("Login Status : "+this.testingservice.isAdmin);
  }

  renderChartData():void{
    this.eventService.renderIncomeChartData()
    .subscribe(res=>{
      console.log(res);

      this.dataSource = {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Top 5 stores in last month by revenue",
            "numberprefix": "$",
            "theme": "fint"
        },
        "data": res["data"]
    }

    },err=>{
      console.log(err);
    })
  }
}
