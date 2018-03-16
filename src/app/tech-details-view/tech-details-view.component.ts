import { Component, OnInit } from '@angular/core';
import { TechnologyDetails } from "../../models/technologyDetails.model";
import { TechnologyDetailsComponent } from "../technology-details/technology-details.component";
import { TechnologyDetailsService } from "../technology-details.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tech-details-view',
  templateUrl: './tech-details-view.component.html',
  styleUrls: ['./tech-details-view.component.css']
})
export class TechDetailsViewComponent implements OnInit {
  

  id: number;
  model: TechnologyDetails=new TechnologyDetails();
  constructor(private techdetailsService:TechnologyDetailsService ,private route: ActivatedRoute,
    private location: Location,private router:Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
   //fetch model
   fetchModel(id: number): void{
    this.techdetailsService.getTechnologyDetail(id)
    .subscribe(res=>{
      this.model=res["data"];
    },
    err=>{
      console.error(err);
    })
  }

}
