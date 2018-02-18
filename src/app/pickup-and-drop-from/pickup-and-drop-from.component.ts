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
  selectedbanks : Bank[] = [];

  constructor(private pickdropService:pickUpAndDropService,
              private route:ActivatedRoute,
              private location:Location,
              private eventService:EventService,
              private bankService:BankService,
              private employeeService : EmployeeService) { }

    ngOnInit() {

      this.getEvents();
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if(id>0){
        this.getPickUpAndDrop(id);
      }
    }
  
    getEvents() : void{

      this.eventService.getEvents()
                  .subscribe(res=>{
                    console.log(res["events"])
                    this.events=res["events"];
                  });

    } 

    getBanks(id : number) : void {

     
      this.bankService.getBanks()
                  .subscribe(res=>{ 
                    console.log(res["banks"])
                    this.banks = res["banks"];
                  });
      this.banks.forEach(element => {
            if(element.EventId==id){
                this.selectedbanks.push(element);
            }        
      });
    }

    getEmployees() : void {
      
      this.employeeService.getEmployee()
                  .subscribe(res=>{
                    console.log(res["employees"]);
                    this.employees = res["employees"];
                  })

    }
    getPickUpAndDrop(id: number): void {
        //const id = +this.route.snapshot.paramMap.get('id');
        this.pickdropService.getPickupAndDrop(id)
          .subscribe(res => this.pickupdrop = res["data"]);
    }
      
      goBack(): void {
        this.location.back();
      }
  
      save(): void{
        if(this.pickupdrop.Id>0){
          this.pickdropService.updatePickupAndDrop(this.pickupdrop)
          .subscribe(
            res=>{
             console.log(res);
            },
            err=>{
             console.error(err);
            }
          ); 
        }else{
          this.pickdropService.addPickupAndDrop(this.pickupdrop)
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
