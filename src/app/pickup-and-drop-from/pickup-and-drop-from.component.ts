import { Component, OnInit } from '@angular/core';
import { PickUpAndDrop } from '../../models/pickUpAndDrop.model';
import { pickUpAndDropService } from '../pickup-and-drop.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Bank } from '../../models/bank.model';
import { Employee } from '../../models/employee.model';
import { Event } from "../../models/event.model";
import { EventService } from "../event.service";
import { BankService } from "../bank.service";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pickup-and-drop-from',
  templateUrl: './pickup-and-drop-from.component.html',
  styleUrls: ['./pickup-and-drop-from.component.css']
})
export class PickupAndDropFromComponent implements OnInit {
  
  pickupdrop:PickUpAndDrop=new PickUpAndDrop();
  events : Event[] = [];
  banks : Bank[] =[];
  employees : Employee[] = [];
  id : number;                //id of sponsor ,Guest or Employee
  type : string;

  constructor(private pickdropService:pickUpAndDropService,
              private route:ActivatedRoute,
              private location:Location,
              private router : Router) { }

    ngOnInit() {

      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.type = this.route.snapshot.paramMap.get('type');

    }
  

  /*    getPickUpAndDrop(id: number): void {
        //const id = +this.route.snapshot.paramMap.get('id');
        this.pickdropService.getPickupAndDrop(id)
          .subscribe(res => this.pickupdrop = res["data"]);
      }
  */    
      goBack(): void {
        this.location.back();
      }
  
      save(): void{
        
          if(this.type == "sponsorguest"){
            this.pickupdrop.SponsorOrGuestId = this.id;
          }
          else if(this.type == "employee"){
            this.pickupdrop.EmployeeId = this.id;
          }
          this.pickdropService.addPickupAndDrop(this.pickupdrop)
          .subscribe(
            res=>{
             console.log(res);
             alert("Data added successfully");
             this.router.navigate( ['/spandgst']);
            },
            err=>{
             console.error(err);
            }
          ); 
        }         
      
}
