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
    console.log("Bank Id :"+this.id);
    this.getTechDetails(this.id);
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
       alert("Marks Added successfully");
       this.router.navigate( ['/bank']);
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

  totalMarks() :void{

    
  }

}
