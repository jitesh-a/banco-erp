import { Component, OnInit } from '@angular/core';
import { ExcellentPerformance } from '../../models/excellentPerformance.model';
import { ExcellentPerformanceService } from "./../excellent-performance.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
@Component({
  selector: 'app-excellent-performance',
  templateUrl: './excellent-performance-form.component.html',
  styleUrls: ['./excellent-performance-form.component.css']
})
export class ExcellentPerformanceFormComponent implements OnInit {
  
  excellentPerformance : ExcellentPerformance= new ExcellentPerformance();
  id: number;
  name : string;
  constructor(private excelperfservice:ExcellentPerformanceService,private route: ActivatedRoute,
    private location: Location,private router:Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.id);
    console.log(name);
    this.excellentPerformance.BankId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("test data"+this.excellentPerformance.BankId);  
  }

  
  
  goBack(): void {
    this.location.back();
  }

  save(): void{
    
      this.excelperfservice.addexcellentPerformance(this.excellentPerformance)
      .subscribe(
        res=>{
         console.log(res);
         //alert("data saved successfully");
         this.router.navigate( ['/technologydetailsform', {id: this.id, name: this.name}]);
        },
        err=>{
         console.error(err);
         
         
        }
      ); 
    }
     
  }



