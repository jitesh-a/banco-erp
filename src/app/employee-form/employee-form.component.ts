import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/employee.model";
import { EmployeeService } from "./../employee.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
    employee:Employee=new Employee();
  
    constructor(private employeeService:EmployeeService,private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if(id>0){
        this.getemployee(id);
      }
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
      if(this.employee.Id>0){
        this.employeeService.updateemployee(this.employee)
        .subscribe(
          res=>{
           console.log(res);
          },
          err=>{
           console.error(err);
          }
        ); 
      }else{
        this.employeeService.addemployee(this.employee)
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
  
