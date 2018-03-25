import { Component, OnInit } from '@angular/core';
import {EventResult  } from "../../models/eventResult.model";
import { BankService } from "../bank.service";

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
