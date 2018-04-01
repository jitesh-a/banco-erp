import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/employee.model";
import { EmployeeService } from "../employee.service";
declare const $;
@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  employees :Employee[]=[];
  dataLoaded: boolean;
  link : string;
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
                  this.dataLoaded=true;
                  $(function(){
                    //alert('test');
                    $('#Employee').DataTable( {
                      dom: 'Bfrtip',
                      buttons: [
                          'copy', 'csv', 'excel', 'pdf', 'print'
                      ]
                      } );
                  })
                  
                });
    //.subscribe(data=>{},err=>{});
  }


  //create link

  createLink(employees: Employee):void{
    
      
      this.link = "http://localhost:4200//fillformemployee/"+employees.Id+"/"+employees.Name;
      console.log( this.link);
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

