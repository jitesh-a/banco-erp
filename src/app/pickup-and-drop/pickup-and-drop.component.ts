import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { PickUpAndDrop } from '../../models/pickUpAndDrop.model';
import { pickUpAndDropService } from "../pickup-and-drop.service";

declare const $;
@Component({
  selector: 'app-pickup-and-drop',
  templateUrl: './pickup-and-drop.component.html',
  styleUrls: ['./pickup-and-drop.component.css']
})
export class PickupAndDropComponent implements OnInit {

  pickdrops: PickUpAndDrop[]=[];
  dataLoaded:boolean;
  constructor(private pickdropService:pickUpAndDropService) { }

  ngOnInit() {
        this.dataLoaded=false;
        this.getPickupDrop();
        this.dataLoaded=true;
      }

//get
getPickupDrop(): void{
  this.pickdropService.getPickUpAndDrops()
  .subscribe(res=>{
    console.log(res["PickupAndDrop"]);
    this.pickdrops=res["PickupAndDrop"];
    
    this.dataLoaded=true;
    $(function(){
      //alert('test');
      $('#Pick').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
        } );
    })
  });
}
        //delete
        delete(pickdrop: PickUpAndDrop): void {
          this.pickdrops = this.pickdrops.filter(h => h !== pickdrop);
          this.pickdropService.deletePickupAndDrop(pickdrop).subscribe(
            res=>{
              console.log(res);
            },
            err => {
              console.error(err);
            }
          );  
  }
}
