import { Injectable } from '@angular/core';
import { Hotel } from "../models/hotel.model";
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
export class HotelService {

  private apiUrl='http://localhost:7888/hotel/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET events from the server */
  getHotels (): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl+'list')
      .pipe(
        tap(events => this.log(`fetched hotels`)),
        catchError(this.handleError('gethotels', []))
      );
  }

  updateHotel(hotel: Hotel): Observable<any>{
    //console.log(event);
    return this.http.put<Hotel>(this.apiUrl+`edit/${hotel.Id}`, hotel, httpOptions)
            .pipe(
              tap(_=>this.log(`Updated hotel : ${hotel.Id}`)),
              catchError(this.handleError<any>(`update event Id=${hotel.Id}`))
            );
  }

   /** GET event by id. Will 404 if id not found */
   getHotel(id: number): Observable<Hotel> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<Hotel>(url).pipe(
      tap(_ => this.log(`fetched hotel id=${id}`)),
      catchError(this.handleError<Hotel>(`getHotel id=${id}`))
    );
  }

  /** POST: add a new event to the server */
  addHotel (hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl+'create', hotel, httpOptions).pipe(
      tap(res => this.log(`added hotel`)),
      catchError(this.handleError<Hotel>('addHotel'))
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

  /** DELETE: delete the event from the server */
  deleteHotel (hotel: Hotel | number): Observable<Hotel> {
    const Id = typeof hotel === 'number' ? hotel : hotel.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<Hotel>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hotel Id=${Id}`)),
      catchError(this.handleError<Hotel>('deleteEvent'))
    );
  } 


}
