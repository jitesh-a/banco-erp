import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { Hotel } from "../../models/hotel.model";
import { HotelService } from "../hotel.service";

@Component({
 
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[] = [];
  dataLoaded: boolean;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getHotels();
    this.dataLoaded=true;
  }

  getHotels():void{

    this.hotelService.getHotels()
                .subscribe(res=>{
                  console.log(res["hotels"]);
                  this.hotels=res["hotels"];
                });    

  } 

  delete(hotel:Hotel):void {

    this.hotels = this.hotels.filter(h=> h!== hotel);
    this.hotelService.deleteHotel(hotel).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.error(err);
      }

    );
  }

}
