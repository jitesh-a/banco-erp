import { Injectable } from '@angular/core';
import { SponsorAndGuest } from "../models/sponsorAndGuest.model";
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
export class SponsorAndGuestService {

  private apiUrl='http://localhost:7888/sponsororguest/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET sponsorandguest from the server */
  getSponsorAndGuests (): Observable<SponsorAndGuest[]> {
    return this.http.get<SponsorAndGuest[]>(this.apiUrl+'list')
      .pipe(
        tap(sponsorandguest => this.log(`fetched sponsorandguest`)),
        catchError(this.handleError('getsponsorandguest', []))
      );
  }

  updateSponsorAndGuest(sponsorandguest: SponsorAndGuest): Observable<any>{
    //console.log(sponsorandguest);
    return this.http.put<SponsorAndGuest>(this.apiUrl+`edit/${sponsorandguest.Id}`, sponsorandguest, httpOptions)
            .pipe(
              tap(_=>this.log(`Updated sponsorandguest : ${sponsorandguest.Id}`)),
              catchError(this.handleError<any>(`update sponsorandguest Id=${sponsorandguest.Id}`))
            );
  }

   /** GET sponsorandguest by id. Will 404 if id not found */
   getSponsorAndGuest(id: number): Observable<SponsorAndGuest> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<SponsorAndGuest>(url).pipe(
      tap(_ => this.log(`fetched sponsorandguest id=${id}`)),
      catchError(this.handleError<SponsorAndGuest>(`getSponsorAndGuest id=${id}`))
    );
  }

  /** POST: add a new sponsorandguest to the server */
  addSponsorAndGuest (sponsorandguest: SponsorAndGuest): Observable<SponsorAndGuest> {
    return this.http.post<SponsorAndGuest>(this.apiUrl+'create', sponsorandguest, httpOptions).pipe(
      tap(res => this.log(`added sponsorandguest`)),
      catchError(this.handleError<SponsorAndGuest>('addSponsorAndGuest'))
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
  deleteSponsorAndGuest (sponsorandguest: SponsorAndGuest | number): Observable<SponsorAndGuest> {
    const Id = typeof sponsorandguest === 'number' ? sponsorandguest : sponsorandguest.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<SponsorAndGuest>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted sponsorandguest Id=${Id}`)),
      catchError(this.handleError<SponsorAndGuest>('deleteSponsorAndGuest'))
    );
  }



}
