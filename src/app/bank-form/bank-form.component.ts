import { Component, OnInit } from '@angular/core';
import { Bank } from "../../models/bank.model";
import { BankService } from "./../bank.service";
import { BankType } from "../../models/bankType.model";
import { BankTypeService } from "../bank-type.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})

export class BankFormComponent implements OnInit {

  bank :Bank =new Bank();
  bankTypes : BankType[] = [];
  id: number;
  name:string;

  constructor(private bankService:BankService,
              private bankTypeService:BankTypeService,
              private route:ActivatedRoute,
              private location:Location,
            private router:Router) { }

  ngOnInit() {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.id);
    console.log(name);
    this.getBankTypes();
    this.bank.EventId= this.id;
  }
    
  getBankTypes():void{

    this.bankTypeService.getBankTypes()
              .subscribe(res=>{
                console.log(res)
                this.bankTypes = res["BankTypes"];
              });
              

  }
  getBank(id : number):void{
    this.bankService.getBank(id)
        .subscribe(res=> this.bank = res["data"])
  }
    
  goBack() :void{
    this.location.back();
  }
    
  save(): void{
    if(this.bank.Id>0){
      this.bankService.updateBank(this.bank)
      .subscribe(
          res=>{
             console.log(res);
             },
          err=>{
             console.error(err);
          }
        ); 
    }else{
      this.bank.EventId = 1;
      this.bank.EventName = "test";
      this.bankService.addBank(this.bank)
        .subscribe(
          res=>{
            console.log(res);
            console.log(res["id"]);
            alert("data saved successfully");
            this.router.navigate( ['/questionary1', {id: res["id"], name: this.name}]);
         
          },
          err=>{
             console.error(err);
          }
        ); 
      }
         
    }
}