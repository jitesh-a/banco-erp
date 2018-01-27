import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Income } from "../../models/income.model";
import { IncomeService } from "./../income.service";


@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent implements OnInit {
 income:Income=new Income(); 
  constructor(private incomeService:IncomeService,private route:ActivatedRoute,
  private location:Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getIncome(id);
    }
  }

    getIncome(id: number): void {
      //const id = +this.route.snapshot.paramMap.get('id');
      this.incomeService.getIncome(id)
        .subscribe(res => this.income = res["data"]);
    }
    
    goBack(): void {
      this.location.back();
    }

    save(): void{
      if(this.income.Id>0){
        this.incomeService.updateIncome(this.income)
        .subscribe(
          res=>{
           console.log(res);
          },
          err=>{
           console.error(err);
          }
        ); 
      }else{
        this.incomeService.addIncome(this.income)
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




