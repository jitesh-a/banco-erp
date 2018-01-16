import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material.module';
import { TestComponent } from "./test.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { BancoEventComponent } from "./banco-event/banco-event.component";
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from "./message.service";
import { EventService } from "./event.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventFormComponent } from './event-form/event-form.component';
import { Event } from "../models/event.model";
import { SponsorAndGuestComponent } from './sponsor-and-guest/sponsor-and-guest.component';
import { SponsorAndGuestFormComponent } from './sponsor-and-guest-form/sponsor-and-guest-form.component';
import { SponsorAndGuestService } from "./sponsor-and-guest.service";
import { BankTypeComponent } from './bank-type/bank-type.component';
import { BankTypeFormComponent } from './bank-type-form/bank-type-form.component';
import { BankTypeService } from './bank-type.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BancoEventComponent,
    MessagesComponent,
    DashboardComponent,
    EventFormComponent,
    SponsorAndGuestComponent,
    SponsorAndGuestFormComponent,
    BankTypeComponent,
    BankTypeFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MessageService,
    EventService,
     SponsorAndGuestService,
     BankTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
