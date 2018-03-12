import { Injectable } from '@angular/core';
import { BankType } from "../models/bankType.model";
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
export class BankTypeService{

  private apiUrl='http://localhost:7888/banktype/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET banktype from the server */
  getBankTypes(): Observable<BankType[]> {
    return this.http.get<BankType[]>(this.apiUrl+'list')
      .pipe(
        tap(banktype => this.log(`fetched banktype`)),
        catchError(this.handleError('getbanktype', []))
      );
  }

  updateBankType(banktype: BankType): Observable<any>{
    //console.log(banktype);
    return this.http.post<BankType>(this.apiUrl+`edit/${banktype.Id}`, banktype, httpOptions);
  }

   /** GET banktype by id. Will 404 if id not found */
   getbanktype(id: number): Observable<BankType> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<BankType>(url).pipe(
      tap(_ => this.log(`fetched banktype id=${id}`)),
      catchError(this.handleError<BankType>(`getbanktype id=${id}`))
    );
  }

  /** POST: add a new banktype to the server */
  addbanktype(banktype:BankType): Observable<BankType> {
    return this.http.post<BankType>(this.apiUrl+'create', banktype, httpOptions).pipe(
      tap(res => this.log(`added banktype`)),
      catchError(this.handleError<BankType>('addbanktype'))
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
  deletebanktype (banktype: BankType | number): Observable<BankType> {
    const Id = typeof banktype === 'number' ? banktype : banktype.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<BankType>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted banktype Id=${Id}`)),
      catchError(this.handleError<BankType>('deletebanktype'))
    );
  }



}
