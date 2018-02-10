import { Component, OnInit } from '@angular/core';
import { ExcellentPerformance } from '../../models/excellentPerformance.model';
import { ExcellentPerformanceService } from "./../excellent-performance.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-excellent-performance',
  templateUrl: './excellent-performance.component.html',
  styleUrls: ['./excellent-performance.component.css']
})
export class ExcellentPerformanceFormComponent implements OnInit {
  excel_perf:ExcellentPerformance=new ExcellentPerformance();
  constructor(private excelperfservice:ExcellentPerformanceService,private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getExcelperf(id);
    }
  }

  
  getExcelperf(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.excelperfservice.getexcellentPerformance(id)
      .subscribe(res => this.excel_perf = res["data"]);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if(this.excel_perf.Id>0){
      this.excelperfservice.updateexcellentPerformance(this.excel_perf)
      .subscribe(
        res=>{
         console.log(res);
        },
        err=>{
         console.error(err);
        }
      ); 
    }else{
      this.excelperfservice.addexcellentPerformance(this.excel_perf)
      .subscribe(
        res=>{
         console.log(res);
        },
        err=>{
         console.error(err);
        }
      ); 
    }
     
  }
}


