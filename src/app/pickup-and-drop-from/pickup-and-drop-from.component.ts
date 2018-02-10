import { Component, OnInit } from '@angular/core';
import { PickUpAndDrop } from '../../models/pickUpAndDrop.model';
import { pickUpAndDropService } from '../pickup-and-drop.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pickup-and-drop-from',
  templateUrl: './pickup-and-drop-from.component.html',
  styleUrls: ['./pickup-and-drop-from.component.css']
})
export class PickupAndDropFromComponent implements OnInit {
  pickupdrop:PickUpAndDrop=new PickUpAndDrop();

  constructor(private pickdropService:pickUpAndDropService,private route:ActivatedRoute,
    private location:Location) { }

    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if(id>0){
        this.getIncome(id);
      }
    }
  
      getIncome(id: number): void {
        //const id = +this.route.snapshot.paramMap.get('id');
        this.pickdropService.getPickupAndDrop(id)
          .subscribe(res => this.pickupdrop = res["data"]);
      }
      
      goBack(): void {
        this.location.back();
      }
  
      save(): void{
        if(this.pickupdrop.Id>0){
          this.pickdropService.updatePickupAndDrop(this.pickupdrop)
          .subscribe(
            res=>{
             console.log(res);
            },
            err=>{
             console.error(err);
            }
          ); 
        }else{
          this.pickdropService.addPickupAndDrop(this.pickupdrop)
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
