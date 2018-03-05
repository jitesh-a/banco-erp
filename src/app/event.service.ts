import { Injectable } from '@angular/core';
import { Event } from "../models/event.model";
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
export class EventService {

  private apiUrl='http://localhost:7888/event/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET events from the server */
  getEvents (): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl+'list')
      .pipe(
        tap(events => this.log(`fetched events`)),
        catchError(this.handleError('getevents', []))
      );
  }

  updateEvent(event: Event): Observable<any>{
    //console.log(event);
    return this.http.put<Event>(this.apiUrl+`edit/${event.Id}`, event, httpOptions)
            .pipe(
              tap(_=>this.log(`Updated event : ${event.Id}`)),
              catchError(this.handleError<any>(`update event Id=${event.Id}`))
            );
  }

   /** GET event by id. Will 404 if id not found */
   getEvent(id: number): Observable<Event> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  /** POST: add a new event to the server */
  addEvent (event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl+'create', event, httpOptions).pipe(
      tap(res => this.log(`added event`)),
      catchError(this.handleError<Event>('addEvent'))
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
  deleteEvent (event: Event | number): Observable<Event> {
    const Id = typeof event === 'number' ? event : event.Id;
    const url = `${this.apiUrl}Delete/${Id}`;

    return this.http.delete<Event>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted event Id=${Id}`)),
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }


}
