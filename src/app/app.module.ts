import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material.module';
import { TestComponent } from "./test/test.component";
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
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelService } from './hotel.service';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { BankComponent } from './bank/bank.component';
import { BankService } from './bank.service';
import { BankFormComponent } from './bank-form/bank-form.component';
import { IncomeComponent } from './income/income.component';
import { IncomeService } from './income.service';
import { IncomeFormComponent } from './income-form/income-form.component';
import { PickupAndDropComponent } from './pickup-and-drop/pickup-and-drop.component';
import { pickUpAndDropService } from "./pickup-and-drop.service";
import { PickupAndDropFromComponent } from './pickup-and-drop-from/pickup-and-drop-from.component';
import { ExcellentPerformanceComponent } from './excellent-performance/excellent-performance.component';
import { ExcellentPerformanceService } from './excellent-performance.service';
import { ExcellentPerformanceFormComponent } from './excellent-performance-form/excellent-performance-form.component';
import { DemoComponent } from './demo/demo.component';
import { TechnologyDetailsComponent } from './technology-details/technology-details.component';
import { TechnologyDetailsService } from './technology-details.service';
import { TestFormComponent } from './test-form/test-form.component';
import { TechnologyDetailsFormComponent } from './technology-details-form/technology-details-form.component';
import { TechDetailsViewComponent } from './tech-details-view/tech-details-view.component';
import { MatRadioModule } from '@angular/material/radio';
import { TestingService } from './testing.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { CustomFormsModule } from 'ng4-validators';
import { ExcelPerformViewComponent } from './excel-perform-view/excel-perform-view.component';
import { BankDetailsComponent } from './bank-details/bank-details.component'

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
    EmployeeComponent,
    EmployeeFormComponent,
    TestComponent,
    HotelComponent,
    HotelFormComponent,
    BankComponent,
    BankFormComponent,
    IncomeComponent,
    IncomeFormComponent,
    PickupAndDropComponent,
    PickupAndDropFromComponent,
    ExcellentPerformanceComponent,
    ExcellentPerformanceFormComponent,
    DemoComponent,
    TechnologyDetailsComponent,
    TestFormComponent,
    TechnologyDetailsFormComponent,
    TechDetailsViewComponent,
    LoginComponent,
    ExcelPerformViewComponent,
    BankDetailsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    CustomFormsModule
  ],
  providers: [
    MessageService,
    EventService,
    SponsorAndGuestService,
    BankTypeService,
    HotelService,
    BankService,
    pickUpAndDropService,
    EmployeeService,
    BankService,
    IncomeService,
    ExcellentPerformanceService,
    HotelService,
    BankService,
    BankService,
    IncomeService,
    TechnologyDetailsService,
    TestingService,
    
    LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
