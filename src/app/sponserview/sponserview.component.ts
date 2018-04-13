import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { pickUpAndDropService } from "../pickup-and-drop.service";
import { PickUpAndDrop } from '../../models/pickUpAndDrop.model';
import { SponsorAndGuest } from '../../models/sponsorAndGuest.model';
import { SponsorAndGuestService } from '../sponsor-and-guest.service';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-sponserview-details',
  templateUrl: './sponserview.component.html',
  styleUrls: ['./sponserview.component.css']
})
export class sponserviewComponent implements OnInit {

  sponser :SponsorAndGuest =new SponsorAndGuest();
  id : number;
  pickupdrop:PickUpAndDrop=new PickUpAndDrop(); 

  constructor(private sponserService:SponsorAndGuestService,
    private route:ActivatedRoute,
    private location:Location,
    private router:Router,
    private pickdropService:pickUpAndDropService,
    private session :  SessionService) { }

  ngOnInit() { 
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getsponser(this.id);
  }

  getsponser(id : number):void{
    this.sponserService.getSponsorAndGuest(id)
        .subscribe(res=>{ 
          this.sponser = res["data"];
          console.log(res);
        })
  }
  getPickUpAndDrop(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.pickdropService.getPickupAndDrop(id)
      .subscribe(res => this.pickupdrop = res["data"]);
}
  
}
