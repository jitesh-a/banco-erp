import { Component, OnInit } from '@angular/core';
import { ExcellentPerformanceService } from "../excellent-performance.service";
import { ExcellentPerformance } from "../../models/excellentPerformance.model";
import { SessionService } from "../session.service";

@Component({
  templateUrl: './excellent-performance.component.html',
  styleUrls: ['./excellent-performance.component.css']
})
export class ExcellentPerformanceComponent implements OnInit {
 
  list :ExcellentPerformance[]=[];
  dataLoaded: boolean;
  constructor(private excellentService :ExcellentPerformanceService,private session :SessionService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getexcellentService();
    this.dataLoaded=true;
  }

   //get
   getexcellentService(): void {
    this. excellentService.getExcellentPerformance()
                .subscribe(res=>{
                  console.log(res["Employee"]);
                  this.excellentService=res["Excellent"];
                  
                });
    //.subscribe(data=>{},err=>{});
  }

  //delete
  delete(excellentPerformance:ExcellentPerformance ): void {
    this.list = this.list.filter(h => h !== excellentPerformance);
    this.excellentService.deleteexcellentPerformance (excellentPerformance).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }

}

