import { Component, OnInit } from '@angular/core';
import { TechnologyDetails } from "../../models/technologyDetails.model";
import { TechnologyDetailsComponent } from "../technology-details/technology-details.component";
import { TechnologyDetailsService } from "../technology-details.service";

@Component({
  selector: 'app-tech-details-view',
  templateUrl: './tech-details-view.component.html',
  styleUrls: ['./tech-details-view.component.css']
})
export class TechDetailsViewComponent implements OnInit {
  
  techdetails: TechnologyDetails[] = [];
  dataLoaded: boolean;
  constructor(private techdetailsService:TechnologyDetailsService) { }

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
