import { Injectable } from '@angular/core';
import { TechnologyDetails } from "../models/technologyDetails.model";
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
export class TechnologyDetailsService {

  private apiUrl='http://localhost:7888/technologydetails/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET TechnologyDetails from the server */
  getTechnologyDetails(): Observable<TechnologyDetails[]> {
    return this.http.get<TechnologyDetails[]>(this.apiUrl+'list')
      .pipe(
        tap(techdetails => this.log(`fetched TechnologyDetails`)),
        catchError(this.handleError('gettechnologytetails', []))
      );
  }

  updateTechnologyDetails(techdetails: TechnologyDetails): Observable<any>{
    return this.http.put<TechnologyDetails>(this.apiUrl+`edit/${techdetails.Id}`, techdetails, httpOptions)
            .pipe(
              tap(_=>this.log(`Updated tech details : ${techdetails.Id}`)),
              catchError(this.handleError<any>(`update tech details Id=${techdetails.Id}`))
            );
  }

   /** GET sponsorandguest by id. Will 404 if id not found */
   getTechnologyDetail(id: number): Observable<TechnologyDetails> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<TechnologyDetails>(url).pipe(
      tap(_ => this.log(`fetched Technology Details id=${id}`)),
      catchError(this.handleError<TechnologyDetails>(`get Technology Details id=${id}`))
    );
  }

  /** POST: add a new sponsorandguest to the server */
  addTechnologyDetails (techdetails:TechnologyDetails): Observable<TechnologyDetails> {
    return this.http.post<TechnologyDetails>(this.apiUrl+'create', techdetails, httpOptions).pipe(
      tap(res => this.log(`added TechnologyDetails`)),
      catchError(this.handleError<TechnologyDetails>('addTechnologyDetails'))
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
  deleteTechnologyDetail (techdetails: TechnologyDetails | number): Observable<TechnologyDetails> {
    const Id = typeof techdetails === 'number' ? techdetails : techdetails.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<TechnologyDetails>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted tech details Id=${Id}`)),
      catchError(this.handleError<TechnologyDetails>('deleteTechnologyDetails'))
    );
  }
}
