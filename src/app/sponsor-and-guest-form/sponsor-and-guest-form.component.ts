import { Component, OnInit } from '@angular/core';
import { SponsorAndGuest } from "../../models/sponsorAndGuest.model";
import { SponsorAndGuestService } from "../sponsor-and-guest.service";
import { Event } from "../../models/event.model";
import { EventService } from "./../event.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-sponsor-and-guest-form',
  templateUrl: './sponsor-and-guest-form.component.html',
  styleUrls: ['./sponsor-and-guest-form.component.css']
})
export class SponsorAndGuestFormComponent implements OnInit {

  events: Event[]=[];
  sponsorandguest:SponsorAndGuest=new SponsorAndGuest();
  constructor(private sponsorandguestService:SponsorAndGuestService,private route:ActivatedRoute,private location:Location,private eventService:EventService) { }

  ngOnInit() {
   
    this.getEvents();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getSponsorAndGuest(id);
    }
  }

  getSponsorAndGuest(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.sponsorandguestService.getSponsorAndGuest(id)
      .subscribe(res => {
                this.sponsorandguest =  res["data"];
                console.log(res)});
  }

  getSponsorAndGuests():void{
  this.sponsorandguestService.getSponsorAndGuests()
  .subscribe(res=> this.sponsorandguest = res["data"]);
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

    goBack(): void {
      this.location.back();
    }
  
    save(): void{
      if(this.sponsorandguest.Id>0){
        this.sponsorandguestService.updateSponsorAndGuest(this.sponsorandguest)
        .subscribe(
          res=>{
           console.log(res);
          },
          err=>{
           console.error(err);
          }
        ); 
      }else{
        this.sponsorandguestService.addSponsorAndGuest(this.sponsorandguest)
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