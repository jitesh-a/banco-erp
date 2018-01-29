import { Injectable } from '@angular/core';
import { FinancialDetails  } from "../models/financialDetails.model";
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
export class ExcellentPerformanceService{

  private apiUrl='http://localhost:7888/FinancialDetails/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET banktype from the server */
  getExcellentPerformance(): Observable<ExcellentPerformance[]> {
    return this.http.get<ExcellentPerformance[]>(this.apiUrl+'list')
      .pipe(
        tap(employee => this.log(`fetched ExcellentPerformance`)),
        catchError(this.handleError('getExcellentPerformance', []))
      );
  }

  updateemployee(employee: Employee): Observable<any>{
    //console.log(employee);
    return this.http.put<Employee>(this.apiUrl+`edit/${employee.Id}`, employee, httpOptions)
            ;
  }

   /** GET banktype by id. Will 404 if id not found */
   getemployee(id: number): Observable<Employee> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched banktype id=${id}`)),
      catchError(this.handleError<Employee>(`getemployee id=${id}`))
    );
  }

  /** POST: add a new banktype to the server */
  addemployee(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl+'create', employee, httpOptions).pipe(
      tap(res => this.log(`added employee`)),
      catchError(this.handleError<Employee>('addemployee'))
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

  /** DELETE: delete the sponsorandguest from the server */
  deleteemployee (employee: Employee | number): Observable<Employee> {
    const Id = typeof employee === 'number' ? employee : employee.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted employee Id=${Id}`)),
      catchError(this.handleError<Employee>('deleteemployee'))
    );
  }



}
