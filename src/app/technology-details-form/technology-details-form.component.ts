import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TechnologyDetails } from "../../models/technologyDetails.model";
import { TechnologyDetailsService } from "./../technology-details.service";
@Component({
  selector: 'app-technology-details-form',
  templateUrl: './technology-details-form.component.html',
  styleUrls: ['./technology-details-form.component.css']
})
export class TechnologyDetailsFormComponent implements OnInit {
  techdetailsform:TechnologyDetails=new TechnologyDetails();
  constructor(private technologydetailService:TechnologyDetailsService,private route:ActivatedRoute,
    private location:Location) { }
  
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if(id>0){
        this.getTechnologyDetails(id);
      }
    }
  
      getTechnologyDetails(id: number): void {
        //const id = +this.route.snapshot.paramMap.get('id');
        this.technologydetailService.getTechnologyDetail(id)
          .subscribe(res => this.techdetailsform = res["data"]);
      }
      
      goBack(): void {
        this.location.back();
      }
  
      save(): void{
        if(this.techdetailsform.Id>0){
          this.technologydetailService.updateTechnologyDetails(this.techdetailsform)
          .subscribe(
            res=>{
             console.log(res);
            },
            err=>{
             console.error(err);
            }
          ); 
        }else{
          this.technologydetailService.addTechnologyDetails(this.techdetailsform)
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
  

 


