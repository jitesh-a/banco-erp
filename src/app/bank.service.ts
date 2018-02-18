import { Injectable } from '@angular/core';
import { Bank } from "../models/bank.model";
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
export class BankService {

  private apiUrl='http://localhost:7888/bank/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET events from the server */
  getBanks (): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiUrl+'list');
  }

  updateBank(bank: Bank): Observable<any>{
    return this.http.put<Bank>(this.apiUrl+`edit/${bank.Id}`, bank, httpOptions);
           
  }

   /** GET sponsorandguest by id. Will 404 if id not found */
   getBank(id: number): Observable<Bank> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<Bank>(url);
  }

  /** POST: add a new event to the server */
  addBank (bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.apiUrl+'create', bank, httpOptions);
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

  /** DELETE: delete the event from the server */
  deleteBank (bank: Bank | number): Observable<Bank> {
    const Id = typeof bank === 'number' ? bank : bank.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<Bank>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted bank Id=${Id}`)),
      catchError(this.handleError<Bank>('deleteBank'))
    );
  }


}