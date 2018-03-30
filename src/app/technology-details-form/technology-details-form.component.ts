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

  id: number;
  name:string;
  techdetails:TechnologyDetails=new TechnologyDetails();
  
  constructor(private technologydetailService:TechnologyDetailsService,private route:ActivatedRoute,
    private location:Location,private router:Router) { }
  
    ngOnInit() {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.name = this.route.snapshot.paramMap.get('name');
      this.techdetails.BankId = this.id;
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
             alert("Data updated successfully");
             this.router.navigate( ['/dashboard']);
            },
            err=>{
             console.error(err);
             alert("Error occured");
             this.router.navigate( ['/dashboard']);
            }
          ); 
        }else{
          console.log(this.techdetails.Branches);
          this.technologydetailService.addTechnologyDetails(this.techdetails)
          .subscribe(
            res=>{
             console.log(res);
             alert("Data added successfully");
             //this.router.navigate( ['/spandgst']);
            },
            err=>{
             console.error(err);
             alert("Error occured");
           //  this.router.navigate( ['/spandgst']);
            }
          ); 
        }
        
      }
  
      
         
      }
  
    
  

 


