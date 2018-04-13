import { Component, OnInit } from '@angular/core';
import { EventService } from "../event.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Income } from "../../models/income.model";
import { IncomeService } from "./../income.service";
//import { EventService } from "./../event.service";
import { Router } from "@angular/router";
import { FusionChartModel } from "../../models/fusion-chart.model";

@Component({
  selector: 'app-top-banks',
  templateUrl: './top-banks.component.html',
  styleUrls: ['./top-banks.component.css']
})
export class TopBanksComponent implements OnInit {

  id1 = 'chartf';
  id2 = 'chartt';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource1;
  dataSource2;

 // data:FusionChartModel[]
  fChart: FusionChartModel[]=[];
  tChart: FusionChartModel[]=[];

  constructor(private route:ActivatedRoute,
    private location:Location,
    private eventService:EventService,
    private router : Router ) { }

  ngOnInit() {

    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.getChartData(id)
  }

  getChartData(id: number):void{
    this.eventService.topBanks(id)
    .subscribe(res=>{
      console.log(res)
      this.fChart=res["fChart"]
      this.tChart=res["tChart"]
      console.log(this.fChart)
      console.log(this.tChart)
      
      this.dataSource1 = {
        "chartf": {
            "caption": "Harry's SuperMart",
            "subCaption": "Top 5 stores in last month by revenue",
            "numberprefix": "$",
            "theme": "fint"
        },
        "data": this.fChart
    }

    this.dataSource2 = {
      "chartf": {
          "caption": "Harry's SuperMart",
          "subCaption": "Top 5 stores in last month by revenue",
          "numberprefix": "$",
          "theme": "fint"
      },
      "data": this.tChart
  }
    },err=>{
      console.error(err)
    })
  }

  
}
