import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { Event } from "../../models/event.model";
import { EventService } from "../event.service";

declare const $;


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
                  console.log(res);
                  this.events=res["events"];
                  this.dataLoaded=true;
                  $(function(){
                    //alert('test');
                    $('#table_events').DataTable( {
                      dom: 'Bfrtip',
                      buttons: [
                          'copy', 'csv', 'excel', 'pdf', 'print'
                      ]
                      } );
                  })
                });
    //.subscribe(data=>{},err=>{});
  }

 

  //delete
  delete(event: Event): void {
    this.events = this.events.filter(h => h !== event);
    this.eventService.deleteEvent(event).subscribe(
      res=>{
        console.log(res);
        if(res["success"]){
          alert("Deleted Successfully");
        }
        else{
          alert("Cannot delete , refering in another field");
        }
      },
      err => {
        console.error(err);
      }
    );
  }
}
