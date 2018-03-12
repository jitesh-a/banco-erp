import { Component, OnInit } from '@angular/core';
import { BankType } from "../../models/bankType.model";
import { BankTypeService } from "./../bank-type.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bank-type-form',
  templateUrl: './bank-type-form.component.html',
  styleUrls: ['./bank-type-form.component.css']
})
export class BankTypeFormComponent implements OnInit {

  banktype : BankType = new BankType();

  constructor(private banktypeService:BankTypeService,private route: ActivatedRoute,
    private location: Location,
    private router: Router ) { }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getBankType(id);
    }
  }

  getBankType(id : number):void{

    this.banktypeService.getbanktype(id)
      .subscribe(res=> this.banktype = res["data"])

  }

  goBack() :void{
    this.location.back();
  }

  save(): void{
    if(this.banktype.Id>0){
      this.banktypeService.updateBankType(this.banktype)
      .subscribe(
        res=>{
         console.log("successfully inserted ");
         alert("data Changed successfully");
         this.router.navigate( ['/banktype']);
        },
        err=>{
         console.error(err);
        }
      ); 
    }else{
      this.banktypeService.addbanktype(this.banktype)
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
