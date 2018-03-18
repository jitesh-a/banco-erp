import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from "../hotel.service";
import { Event } from "../../models/event.model";
import { EventService } from "./../event.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

 events : Event[] = [];
  hotel:Hotel = new Hotel(); 

  constructor(private hotelService:HotelService,private route:ActivatedRoute,
    private location: Location,
    private eventService:EventService,
    private router:Router) { }
    
  ngOnInit() {
    this.getEvents();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getHotel(id);
    }
  }

  getHotel(id: number) : void{

    this.hotelService.getHotel(id)
      .subscribe(res=> this.hotel = res["data"]);
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

  goBack() : void{
    this.location.back();
  }

  save(): void{
    if(this.hotel.Id>0){
      console.log("Hotel data : "+this.hotel)
      this.hotelService.updateHotel(this.hotel)
      .subscribe(
        res=>{
         console.log(res);
         alert("Data updated successfully");
         this.router.navigate( ['/hotel']);
        },
        err=>{
         console.error(err);
         this.router.navigate( ['/hotel']);
        }
      ); 
    }else{
      this.hotelService.addHotel(this.hotel)
      .subscribe(
        res=>{
         console.log(res);
         alert("Data added successfully");
         this.router.navigate( ['/hotel']);
        },
        err=>{
         console.error(err);
         this.router.navigate( ['/hotel']);
        }
      ); 
    }
     
  }

}
