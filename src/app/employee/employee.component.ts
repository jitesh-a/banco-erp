import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/employee.model";
import { EmployeeService } from "../employee.service";
@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  employee :Employee[]=[];
  dataLoaded: boolean;
  constructor(private employeeService :EmployeeService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getemployee();
    this.dataLoaded=true;
  }

   //get
   getemployee(): void {
    this.employeeService.getEmployee()
                .subscribe(res=>{
                  console.log(res["Employee"]);
                  this.employee=res["Employee"];
                  
                });
    //.subscribe(data=>{},err=>{});
  }

  //delete
  delete(employee: Employee): void {
    this.employee = this.employee.filter(h => h !==employee);
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

