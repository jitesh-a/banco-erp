import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/employee.model";
import { EmployeeService } from "./../employee.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { Bank } from '../../models/bank.model';
import { BankService } from "../bank.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
    employee:Employee=new Employee();
    banks : Bank[] = [];
    constructor(private employeeService:EmployeeService,
                private route: ActivatedRoute,
                private location: Location,
                private bankService : BankService) { }
  
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.getBanks();
      if(id>0){
        this.getemployee(id);
      }
    }
  
    getBanks():void{

      this.bankService.getBanks()
                .subscribe(res=>{
                  console.log(res)
                  this.banks = res["banks"];
                });
    }

    getemployee(id: number): void {
      //const id = +this.route.snapshot.paramMap.get('id');
      this.employeeService.getemployee(id)
        .subscribe(res => this.employee = res["data"]);
    }
  
    goBack(): void {
      this.location.back();
    }
  
    save(): void{
      console.log(this.employee);
      if(this.employee.Id>0){
        this.employeeService.updateemployee(this.employee)
        .subscribe(
          res=>{
           console.log(res["message"]);
          },
          err=>{
           console.error(err);
          }
        ); 
      }else{
        this.employeeService.addemployee(this.employee)
        .subscribe(
          res=>{
           console.log(res["message"]);
          },
          err=>{
           console.error(err);
          }
        ); 
      }
       
    }
  }
  
