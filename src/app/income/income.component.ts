import { Component, OnInit } from '@angular/core';
import { Income } from '../../models/income.model';
import { IncomeService } from '../income.service';
import { SessionService } from "../session.service";

declare const $;
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomes: Income[]=[];
  dataLoaded:boolean;
  constructor(private incomeService: IncomeService,private session : SessionService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getIncomes();
    this.dataLoaded=true;
  }

  //get
  getIncomes(): void {
    this.incomeService.getIncomes()
                .subscribe(res=>{
                  console.log(res["incomeandexpenses"]);
                  this.incomes=res["incomeandexpenses"];
                  this.dataLoaded=true;
                  $(function(){
                    //alert('test');
                    $('#Income').DataTable( {
                      dom: 'Bfrtip',
                      buttons: [
                          'copy', 'csv', 'excel', 'pdf', 'print'
                      ]
                      } );
                  })
                  
                });
    //.subscribe(data=>{},err=>{});
  }
  delete(income: Income): void {
    this.incomes = this.incomes.filter(i => i !== income);
    this.incomeService.deleteIncome(income).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
