import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Income } from "../../models/income.model";
import { IncomeService } from "./../income.service";
import { EventService } from "./../event.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent implements OnInit {
 
  events: Event[]=[];
  income: Income = new Income(); 
  constructor(private incomeService:IncomeService,private route:ActivatedRoute,
  private location:Location,
  private eventService:EventService,
  private router : Router ) { }

  ngOnInit() {
    this.getEvents();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getIncome(id);
    }
  }

  getEvents(): void {
    this.eventService.getEvents()
                .subscribe(res=>{
                  console.log(res["events"]);
                  this.events=res["events"];
                 
                });
    //.subscribe(data=>{},err=>{});
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
      console.log("Data :"+this.income);
      if(this.income.Id>0){
        console.log("update :"+this.income.EventId);
        this.incomeService.updateIncome(this.income)
        .subscribe(
          res=>{
           console.log(res);
           alert("Data Added Successfully...");
           this.router.navigate( ['/income']);

          },
          err=>{
           console.error(err);
          }
        ); 
      }else{
        console.log(this.income.Type);
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




