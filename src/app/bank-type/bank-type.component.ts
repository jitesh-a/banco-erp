import { Component, OnInit } from '@angular/core';
import { BankType } from "../../models/bankType.model";
import { BankTypeService } from "../bank-type.service";

declare const $;
@Component({
  templateUrl: './bank-type.component.html',
  styleUrls: ['./bank-type.component.css']
})
export class BankTypeComponent implements OnInit {
 
  banktypes :BankType[]=[];
  dataLoaded: boolean;
  constructor(private banktypeService :BankTypeService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getbanktypes();
    this.dataLoaded=true;
  }

   //get
   getbanktypes(): void {
    this.banktypeService.getBankTypes()
                .subscribe(res=>{
                  console.log(res["BankTypes"]);
                  this.banktypes=res["BankTypes"];
                  this.dataLoaded=true;
                  $(function(){
                    alert('test');
                    $('#Banktype').DataTable({
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
  delete(banktype: BankType): void {
    this.banktypes = this.banktypes.filter(h => h !==banktype);
    this.banktypeService.deletebanktype(banktype).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }

}
