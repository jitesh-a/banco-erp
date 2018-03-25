import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from "./../employee.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent implements OnInit {

  emp :Employee =new Employee();
  id : number;
  
    constructor(private employeeService:EmployeeService,
     private route:ActivatedRoute,
      private location:Location,
      private router:Router) { }
  
    ngOnInit() { 
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.getBank(this.id);
    }
  
    getBank(id : number):void{
      this.bankService.getBank(id)
          .subscribe(res=>{ 
            this.bank = res["data"];
            console.log(res);
          })
    }
  }
