import { Component, OnInit } from '@angular/core';
import { Event } from "../../models/event.model";
import { EventService } from "./../event.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event:Event=new Event();

  constructor(private eventService:EventService,private route: ActivatedRoute,
    private location: Location,
    private router:Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getEvent(id);
    }
  }

  
  getEvent(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(res => this.event = res["data"]);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if(this.event.Id>0){
      this.eventService.updateEvent(this.event)
      .subscribe(
        res=>{
         console.log(res);
         alert("data Changed successfully");
         this.router.navigate( ['/events']);
        },
        err=>{
         console.error(err);
        }
      ); 
    }else{
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
}
