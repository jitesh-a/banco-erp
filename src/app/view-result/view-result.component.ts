import { Component, OnInit } from '@angular/core';
import {EventResult  } from "../../models/eventResult.model";
import { EventService } from "../event.service";
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from "../session.service";

declare const $;
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})

export class ViewResultComponent implements OnInit {

  result: EventResult[]=[];
  constructor(private eventService: EventService,private route:ActivatedRoute,
    private location:Location,private router:Router,private session : SessionService) { }
  dataLoaded:boolean;
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataLoaded=false;
     this.getResults(id);
     console.log(id);
    this.dataLoaded=true;

  }
 //get results 
  getResults(id:number):void
  {
    this.eventService.eventResult(id)
    .subscribe(res=>{
      console.log(res);
      this.result= res["data"];
      console.log(this.result);
      this.dataLoaded=true;
      $(function(){
        //alert('test');
        $('#Result').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
          } );
      })
    });
  }
}
