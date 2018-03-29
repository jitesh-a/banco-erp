import { Component, OnInit } from '@angular/core';
import { TechnologyDetails } from "../../models/technologyDetails.model";
import { TechnologyDetailsComponent } from "../technology-details/technology-details.component";
import { TechnologyDetailsService } from "../technology-details.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tech-details-view',
  templateUrl: './tech-details-view.component.html',
  styleUrls: ['./tech-details-view.component.css']
})
export class TechDetailsViewComponent implements OnInit {
  
  totalmarks : number;
  id: number;
  techdetails:TechnologyDetails=new TechnologyDetails();

  constructor(private techdetailsService:TechnologyDetailsService ,private route: ActivatedRoute,
    private location: Location,private router:Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Bank Id :"+this.route.snapshot.paramMap.get('id'));
    console.log("Bank name :"+this.route.snapshot.paramMap.get('name'));
    this.getTechDetails(this.id);
    this.totalMarks();
    console.log("value" +this.totalmarks);
  }
   //fetch model
   getTechDetails(id: number): void{
    this.techdetailsService.getTechRecord(id)
    .subscribe(res=>{
      console.log(res);
      this.techdetails=res["data"];
    },
    err=>{
      console.error(err);
    })
  }

  save() : void{

    this.techdetailsService.updateTechnologyDetails(this.techdetails)
    .subscribe(
      res=>{
       console.log(res);
       alert("Marks Addes successfully");
      // this.router.navigate( ['/dashboard']);
      },
      err=>{
       console.error(err);
       alert("Error occured");
     //  this.router.navigate( ['/dashboard']);
      }
    ); 

  }

  totalMarks() :void{

    this.totalmarks = this.techdetails.M1 
                      +this.techdetails.M2
                      +this.techdetails.M3
                      +this.techdetails.M4
                      +this.techdetails.M5
                      +this.techdetails.M6
                      +this.techdetails.M7
                      +this.techdetails.M8
                      +this.techdetails.M9
                      +this.techdetails.M10
                      +this.techdetails.M11
                      +this.techdetails.M12
                      +this.techdetails.M13
                      +this.techdetails.M14
                      +this.techdetails.M15
                      +this.techdetails.M16
                      +this.techdetails.M17
                      +this.techdetails.M18
                      +this.techdetails.M19
                      +this.techdetails.M20
                      +this.techdetails.M21
                      +this.techdetails.M22
                      +this.techdetails.M23
                      +this.techdetails.M24
                      +this.techdetails.M25
  }

}
