import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import {Bank  } from "../../models/bank.model";
import { BankService } from "../bank.service";

declare const $;


@Component({
 templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks: Bank[]=[];
  dataLoaded: boolean;
  changeview : boolean;
  
  constructor(private bankService: BankService,private service : SessionService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getBank();
    this.dataLoaded=true;
    this.changeview=false;

  }


  getBank(): void {
    this.bankService.getBanks()
                .subscribe(res=>{
                  console.log("Inside Bank : "+res["bank"]);
                  this.banks=res["banks"];
                  this.dataLoaded=true;
                  $(function(){
                    //alert('test');
                    $('#Bank').DataTable( {
                      dom: 'Bfrtip',
                      buttons: [
                          'copy', 'csv', 'excel', 'pdf', 'print'
                      ]
                      } );
                  })
                  
                });
    //.subscribe(data=>{},err=>{});
              }
     //delete
  delete(bank: Bank): void {
    this.banks = this.banks.filter(h => h !== bank);
    this.bankService.deleteBank(bank).subscribe(
      res=>{
        console.log(res);
        if(res["success"]){
          alert("Deleted Successfully");
        }
        else{
          alert("Cannot delete , refering in another field");
        }
      },
      err => {
        console.error(err);
      }
    );
  }          
}