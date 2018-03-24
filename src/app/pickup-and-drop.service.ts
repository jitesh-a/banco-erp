import { Injectable } from '@angular/core';
import { PickUpAndDrop } from "../models/pickUpAndDrop.model";
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
export class pickUpAndDropService {

  private apiUrl='http://localhost:7888/pickanddrop/';

  constructor(private messageService: MessageService,private http:HttpClient) { }

  /** GET events from the server */
  getPickUpAndDrops (): Observable<PickUpAndDrop[]> {
    return this.http.get<PickUpAndDrop[]>(this.apiUrl+'list')
      .pipe(
        tap(pickdrop => this.log(`fetched pick and drop `)),
        catchError(this.handleError('getPickupandDrop', []))
      );
  }

  updatePickupAndDrop(pickdrop: PickUpAndDrop): Observable<any>{
    //console.log(event);
    return this.http.put<PickUpAndDrop>(this.apiUrl+`edit/${pickdrop.Id}`, pickdrop, httpOptions)
            .pipe(
              tap(_=>this.log(`Updated PickupAndDrop : ${pickdrop.Id}`)),
              catchError(this.handleError<any>(`update pick and drop Id=${pickdrop.Id}`))
            );
  }

   /** GET pick up and drop by id. Will 404 if id not found */
   getPickupAndDrop(id: number): Observable<PickUpAndDrop> {
    const url = `${this.apiUrl}find/${id}`;
    return this.http.get<PickUpAndDrop>(url).pipe(
      tap(_ => this.log(`fetched pickup and drop  id=${id}`)),
      catchError(this.handleError<PickUpAndDrop>(`get Pick up and drop id=${id}`))
    );
  }

  /** POST: add a new pickup and drop to the server */
  addPickupAndDrop (pickdrop: PickUpAndDrop): Observable<PickUpAndDrop> {
    return this.http.post<PickUpAndDrop>(this.apiUrl+'create', pickdrop, httpOptions).pipe(
      tap(res => this.log(`added pickup and drop`)),
      catchError(this.handleError<PickUpAndDrop>('addpickupanddrop'))
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
  deletePickupAndDrop (pickdrop: PickUpAndDrop | number): Observable<PickUpAndDrop> {
    const Id = typeof pickdrop === 'number' ? pickdrop : pickdrop.Id;
    const url = `${this.apiUrl}delete/${Id}`;

    return this.http.delete<PickUpAndDrop>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted pickup and drop Id=${Id}`)),
      catchError(this.handleError<PickUpAndDrop>('delete pickup and drop'))
    );
  }


}

