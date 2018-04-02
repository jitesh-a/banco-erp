import { Injectable } from '@angular/core';

@Injectable()
export class TestingService {
  public isAdmin : boolean; 
  constructor() { 

    this.isAdmin = false;
  }

}
