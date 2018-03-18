import { Component, OnInit } from '@angular/core';
import { Income } from '../../models/income.model';
import { IncomeService } from '../income.service';
declare const $;
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  income: Income[]=[];
  dataLoaded:boolean;
  constructor(private incomeService: IncomeService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getIncome();
    this.dataLoaded=true;
  }

  //get
  getIncome(): void {
    this.incomeService.getIncomes()
                .subscribe(res=>{
                  console.log(res["income"]);
                  this.income=res["income"];
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
    this.income = this.income.filter(h => h !== income);
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
