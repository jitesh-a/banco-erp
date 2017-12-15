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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BancoEventComponent,
    MessagesComponent,
    DashboardComponent,
    EventFormComponent,
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
    EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
