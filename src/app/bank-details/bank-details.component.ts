import { Component, OnInit } from '@angular/core';
import { Bank } from "../../models/bank.model";
import { BankService } from "./../bank.service";
import { BankType } from "../../models/bankType.model";
import { BankTypeService } from "../bank-type.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bank :Bank =new Bank();
  id : number;

  constructor(private bankService:BankService,
    private bankTypeService:BankTypeService,
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
