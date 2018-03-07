import { Injectable } from '@angular/core';
import { Login } from "../models/login.model";
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

//header options  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  private apiUrl='http://localhost:7888/account/';

  constructor(private http:HttpClient) { }

  checkCredential (login : Login): Observable<Login> {
    return this.http.post<any>(this.apiUrl+'loginapi',login,httpOptions);
  }

  
}
