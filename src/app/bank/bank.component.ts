import { Component, OnInit } from '@angular/core';

import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import {Bank  } from "../../models/bank.model";
import { BankService } from "../bank.service";


@Component({
 templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks: Bank[]=[];
  dataLoaded: boolean;
  
  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getBank();
    this.dataLoaded=true;
  }

  //get
  getBank(): void {
    this.bankService.getBanks()
                .subscribe(res=>{
                  console.log(res["bank"]);
                  this.banks=res["banks"];
                  
                });
    //.subscribe(data=>{},err=>{});
              }
     //delete
  delete(bank: Bank): void {
    this.banks = this.banks.filter(h => h !== bank);
    this.bankService.deleteBank(bank).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }          
            }