import { Component, OnInit } from '@angular/core';
import { ExcellentPerformance } from '../../models/excellentPerformance.model';
import { ExcellentPerformanceService } from "./../excellent-performance.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-excellent-performance',
  templateUrl: './excellent-performance-form.component.html',
  styleUrls: ['./excellent-performance-form.component.css']
})
export class ExcellentPerformanceFormComponent implements OnInit {
  excelperfform:ExcellentPerformance=new ExcellentPerformance();
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
      .subscribe(res => this.excelperfform = res["data"]);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if(this.excelperfform.Id>0){
      this.excelperfservice.updateexcellentPerformance(this.excelperfform)
      .subscribe(
        res=>{
         console.log(res);
        },
        err=>{
         console.error(err);
        }
      ); 
    }else{
      this.excelperfservice.addexcellentPerformance(this.excelperfform)
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


