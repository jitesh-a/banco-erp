import { Component, OnInit } from '@angular/core';
import { Bank } from "../../models/bank.model";
import { BankService } from "./../bank.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
  bank :Bank =new Bank();
  constructor(private bankService:BankService,private route:ActivatedRoute
  ,private location:Location) { }

  ngOnInit() {
    
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if(id>0){
          
        }
      }
    
      getBankType(id : number):void{
    
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
          this.bankService.addBank(this.bank)
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