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
  id: number;
  name : string;
  constructor(private excelperfservice:ExcellentPerformanceService,private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.id);
    console.log(name);
  }

  
  
  goBack(): void {
    this.location.back();
  }

  save(): void{
    
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



