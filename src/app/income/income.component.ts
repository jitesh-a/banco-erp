import { Component, OnInit } from '@angular/core';
import { Income } from '../../models/income.model';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomes: Income[]=[];
  dataLoaded:boolean;
  constructor(private incomeService: IncomeService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getIncomes();
    this.dataLoaded=true;
  }

  //get
  getIncomes(): void {
    this.incomeService.getIncomes()
                .subscribe(res=>{
                  console.log("Data :"+res["incomeandexpenses"]);
                  this.incomes=res["incomeandexpenses"];
                  
                });
    //.subscribe(data=>{},err=>{});
  }
  delete(income: Income): void {
    this.incomes = this.incomes.filter(h => h !== income);
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
