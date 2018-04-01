import { Component, OnInit } from '@angular/core';
import { SponsorAndGuest } from "../../models/sponsorAndGuest.model";
import { SponsorAndGuestService } from "../sponsor-and-guest.service";
import { Event } from "../../models/event.model";
import { EventService } from "./../event.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sponsor-and-guest-form',
  templateUrl: './sponsor-and-guest-form.component.html',
  styleUrls: ['./sponsor-and-guest-form.component.css']
})
export class SponsorAndGuestFormComponent implements OnInit {

  events: Event[]=[];
  sponsorandguest:SponsorAndGuest=new SponsorAndGuest();
  constructor(private sponsorandguestService:SponsorAndGuestService,private route:ActivatedRoute,private location:Location,private eventService:EventService,
              private router : Router) { }

  ngOnInit() {
   
    this.getEvents();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id>0){
      this.getSponsorOrGuets(id);
      //new DateTime
    }
    
  }

  getSponsorAndGuest(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.sponsorandguestService.getSponsorAndGuest(id)
      .subscribe(res => {
                this.sponsorandguest =  res["data"];
                console.log(res)});
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

    getSponsorOrGuets(id : number):void{
      
          this.sponsorandguestService.getSponsorAndGuest(id)
            .subscribe(res=> this.sponsorandguest = res["data"],
          err=>console.error(err));
      
    }
      
    goBack() :void{
      this.location.back();
    }
  
    save(): void{
      if(this.sponsorandguest.Id>0){
        this.sponsorandguestService.updateSponsorAndGuest(this.sponsorandguest)
        .subscribe(
          res=>{
           console.log(res);
           
           alert("Data updated successfully");
           this.router.navigate( ['/nextsponser',{id : this.sponsorandguest.Id}]);
          },
          err=>{
           console.error(err);
           alert("Error occured");
           this.router.navigate( ['/spandgst']);
          }
        ); 
      }else{
        this.sponsorandguestService.addSponsorAndGuest(this.sponsorandguest)
        .subscribe(
          res=>{
           console.log(res);
           alert("Data added successfully");
           this.router.navigate( ['/nextsponser',{id : this.sponsorandguest.Id}]);
          },
          err=>{
           console.error(err);
           alert("Error occured");
           this.router.navigate( ['/spandgst']);
          }
        ); 
      }
      
    }
}