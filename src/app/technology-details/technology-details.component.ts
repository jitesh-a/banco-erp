import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { TechnologyDetails } from "../../models/technologyDetails.model";
import { TechnologyDetailsService } from "../technology-details.service";
import { SessionService } from "../session.service";

@Component({
  selector: 'app-technology-details',
  templateUrl: './technology-details.component.html',
  styleUrls: ['./technology-details.component.css']
})
export class TechnologyDetailsComponent implements OnInit {

  techdetails: TechnologyDetails[] = [];
  dataLoaded: boolean;
  constructor(private techdetailsService:TechnologyDetailsService,private session : SessionService) { }

  ngOnInit() {
    this.dataLoaded=false;
    this.getTechnologyDetail();
    this.dataLoaded=true;
  }
  getTechnologyDetail():void{
    this.techdetailsService.getTechnologyDetails()
    .subscribe(res=>{
      console.log(res["TechnologyDetails"]);
      this.techdetails=res["TechnologyDetails"];
    });  
  }
    delete(techdetails:TechnologyDetails):void {
      
          this.techdetails = this.techdetails.filter(h=> h!== techdetails);
          this.techdetailsService.deleteTechnologyDetail(techdetails).subscribe(
            res =>{
              console.log(res);
            },
            err =>{
              console.error(err);
            }
      
          );
        

  }

}
