import { Injectable } from '@angular/core';
import { Income } from "../models/income.model";
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

//header options  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IncomeService {

  private apiUrl='http://localhost:7888/incomeandexpense/';
  
    constructor(private messageService: MessageService,private http:HttpClient) { }
  
    /** GET events from the server */
    getIncomes (): Observable<Income[]> {
      return this.http.get<Income[]>(this.apiUrl+'list')
        .pipe(
          tap(events => this.log(`fetched incomes`)),
          catchError(this.handleError('getincomes', []))
        );
    }
  
    updateIncome(income: Income): Observable<any>{
      //console.log(event);
      return this.http.put<Income>(this.apiUrl+`edit/${income.Id}`, event, httpOptions)
              .pipe(
                tap(_=>this.log(`Updated income : ${income.Id}`)),
                catchError(this.handleError<any>(`update income Id=${income.Id}`))
              );
    }
  
     /** GET event by id. Will 404 if id not found */
     getIncome(id: number): Observable<Income> {
      const url = `${this.apiUrl}find/${id}`;
      return this.http.get<Income>(url).pipe(
        tap(_ => this.log(`fetched income id=${id}`)),
        catchError(this.handleError<Income>(`getIncome id=${id}`))
      );
    }
  
    /** POST: add a new event to the server */
    addIncome (income: Income): Observable<Income> {
      return this.http.post<Income>(this.apiUrl+'create', income, httpOptions).pipe(
        tap(res => this.log(`added income`)),
        catchError(this.handleError<Income>('addIncome'))
      );
    }
  
    private log(message: string){ 
      this.messageService.add(message);
    }
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** DELETE: delete the income from the server */
    deleteIncome (income: Income | number): Observable<Income> {
      const Id = typeof income === 'number' ? income : income.Id;
      const url = `${this.apiUrl}delete/${Id}`;
  
      return this.http.delete<Income>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted income Id=${Id}`)),
        catchError(this.handleError<Income>('deleteIncome'))
      );
    }
  
  

}
