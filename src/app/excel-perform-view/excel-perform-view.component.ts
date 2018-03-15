import { Component, OnInit } from '@angular/core';
import { ExcellentPerformance } from "../../models/excellentPerformance.model";
import { ExcellentPerformanceComponent } from "../excellent-performance/excellent-performance.component";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ExcellentPerformanceService } from "../excellent-performance.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-excel-perform-view',
  templateUrl: './excel-perform-view.component.html',
  styleUrls: ['./excel-perform-view.component.css']
})
export class ExcelPerformViewComponent implements OnInit {

  id: number;
  model: ExcellentPerformance=new ExcellentPerformance();

  constructor(private excelperfservice:ExcellentPerformanceService,private route: ActivatedRoute,
  private location: Location,private router:Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  //fetch model
  fetchModel(id: number): void{
    this.excelperfservice.getexcellentPerformance(id)
    .subscribe(res=>{
      this.model=res["data"];
    },
    err=>{
      console.error(err);
    })
  }
}
