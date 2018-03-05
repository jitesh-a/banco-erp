import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/employee.model";
import { EmployeeService } from "../employee.service";
@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  employees :Employee[]=[];
  dataLoaded: boolean;
  constructor(private employeeService :EmployeeService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getemployees();
    this.dataLoaded=true;
  }

   //get
   getemployees(): void {
    this.employeeService.getEmployee()
                .subscribe(res=>{
                  console.log(res);
                  this.employees=res["employees"];
                  
                });
    //.subscribe(data=>{},err=>{});
  }

  //delete
  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !==employee);
    this.employeeService.deleteemployee(employee).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }

}

