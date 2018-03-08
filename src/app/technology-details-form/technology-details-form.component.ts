import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TechnologyDetails } from "../../models/technologyDetails.model";
import { TechnologyDetailsService } from "./../technology-details.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-technology-details-form',
  templateUrl: './technology-details-form.component.html',
  styleUrls: ['./technology-details-form.component.css']
})
export class TechnologyDetailsFormComponent implements OnInit {
  techdetails:TechnologyDetails=new TechnologyDetails();
  
  constructor(private technologydetailService:TechnologyDetailsService,private route:ActivatedRoute,
    private location:Location,private router:Router) { }
  
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if(id>0){
        this.getTechnologyDetails(id);
        this.techdetails.Id = Number(this.route.snapshot.paramMap.get('id'));
        console.log("test data"+this.techdetails.Id);
      }
    }
  
      getTechnologyDetails(id: number): void {
        //const id = +this.route.snapshot.paramMap.get('id');
        this.technologydetailService.getTechnologyDetail(id)
          .subscribe(res => this.techdetails = res["data"]);
      }
      
      goBack(): void {
        this.location.back();
      }
  
      save(): void{
        if(this.techdetails.Id>0){
          this.technologydetailService.updateTechnologyDetails(this.techdetails)
          .subscribe(
            res=>{
             console.log(res);
            },
            err=>{
             console.error(err);
            }
          ); 
        }else{
          this.technologydetailService.addTechnologyDetails(this.techdetails)
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
  

 


