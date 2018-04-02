import { Component, OnInit } from '@angular/core';
import { ExcellentPerformance } from "../../models/excellentPerformance.model";
import { ExcellentPerformanceComponent } from "../excellent-performance/excellent-performance.component";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { ExcellentPerformanceService } from "../excellent-performance.service";


@Component({
  selector: 'app-excel-perform-view',
  templateUrl: './excel-perform-view.component.html',
  styleUrls: ['./excel-perform-view.component.css']
})
export class ExcelPerformViewComponent implements OnInit {

  id: number;
  name: string;
  excellentperformance: ExcellentPerformance=new ExcellentPerformance();

  constructor(private excelperfservice:ExcellentPerformanceService,private route: ActivatedRoute,
  private location: Location,private router:Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.name = this.route.snapshot.paramMap.get('name')
    this.fetchExcelDetails(this.id);
    console.log(this.id);
  }

  //fetch excellentperformance
  fetchExcelDetails(id: number): void{
    this.excelperfservice.getExcelRecord(id)
    .subscribe(res=>{
      console.log("DAta : "+res.NetWorthCYP);
      this.excellentperformance=res["data"];
    },
    err=>{
      console.error(err);
    })
  }

  save() : void{

    this.excelperfservice.updateexcellentPerformance(this.excellentperformance)
    .subscribe(
      res=>{
       console.log(res);
       this.router.navigate( ['/techdetailsview', {id: this.id}]);
      },
      err=>{
       console.error(err);
       alert("Error occured");
     //  this.router.navigate( ['/dashboard']);
      }
    ); 

  }

  goBack() :void{
    this.location.back();
  }
}
