import { Component, OnInit } from '@angular/core';
import {EventResult  } from "../../models/eventResult.model";
import { EventService } from "../event.service";

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  result: EventResult[]=[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }
 //get results 
  getResults(id):void
  {
    this.eventService.eventResult(id).subscribe(
      res=>{
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
