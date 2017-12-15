import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { Event } from "../../models/event.model";
import { EventService } from "../event.service";


@Component({
 templateUrl: './banco-event.component.html',
  styleUrls: ['./banco-event.component.css']
})
export class BancoEventComponent implements OnInit {
events: Event[]=[];
dataLoaded: boolean;
  
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getEvents();
    this.dataLoaded=true;
  }

  //get
  getEvents(): void {
    this.eventService.getEvents()
                .subscribe(res=>{
                  console.log(res["events"]);
                  this.events=res["events"];
                  
                });
    //.subscribe(data=>{},err=>{});
  }

  //add
  /*add(Name: string,Description): void {
    name = name.trim();
    if (!name) { return; }
    this.eventService.addEvent({ name, } as Event)
      .subscribe(res => {
        this.events.push(res["event"]);
        console.log(res);
      });
  }*/

  //delete
  delete(event: Event): void {
    this.events = this.events.filter(h => h !== event);
    this.eventService.deleteEvent(event).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
