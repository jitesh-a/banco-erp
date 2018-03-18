import { Injectable } from '@angular/core';
import { ExcellentPerformance } from "../models/excellentPerformance.model";
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

  private apiUrl='http://localhost:7888/ExcellentPerformance/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET banktype from the server */
  getExcellentPerformance(): Observable<ExcellentPerformance[]> {
    return this.http.get<ExcellentPerformance[]>(this.apiUrl+'list')
      .pipe(
        tap(employee => this.log(`fetched ExcellentPerformance`)),
        catchError(this.handleError('getExcellentPerformance', []))
      );
  }

  updateexcellentPerformance(excel_perf: ExcellentPerformance): Observable<any>{
    //console.log(employee);
    return this.http.put<ExcellentPerformance>(this.apiUrl+`edit/${excel_perf.Id}`,excel_perf, httpOptions)
            ;
  }

   /** GET banktype by id. Will 404 if id not found */
   getexcellentPerformance(id: number): Observable<ExcellentPerformance> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<ExcellentPerformance>(url).pipe(
      tap(_ => this.log(`fetched excellent performance id=${id}`)),
      catchError(this.handleError<ExcellentPerformance>(`getemployee id=${id}`))
    );
  }

  /** POST: add a new banktype to the server */
  addexcellentPerformance(excel_perf:ExcellentPerformance): Observable<ExcellentPerformance> {
    return this.http.post<ExcellentPerformance>(this.apiUrl+'create', excel_perf, httpOptions).pipe(
      tap(res => this.log(`added excellent Performance`)),
      catchError(this.handleError<ExcellentPerformance>('addexcellentPerformance'))
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
  deleteexcellentPerformance (excel_perf: ExcellentPerformance | number): Observable<ExcellentPerformance> {
    const Id = typeof excel_perf === 'number' ? excel_perf : excel_perf.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<ExcellentPerformance>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted data Id=${Id}`)),
      catchError(this.handleError<ExcellentPerformance>('deletedata'))
    );
  }



}
