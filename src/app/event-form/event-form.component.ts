import { Component, OnInit } from '@angular/core';
import { Event } from "../../models/event.model";
import { EventService } from "./../event.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event:Event=new Event();

  constructor(private eventService:EventService,private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.eventService.addEvent(this.event)
        .subscribe(
          res=>{
           console.log(res);
          },
          err=>{
           console.error(err);
          }
        );  
  }
}
