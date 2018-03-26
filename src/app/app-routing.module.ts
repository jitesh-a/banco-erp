import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoEventComponent } from "./banco-event/banco-event.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventFormComponent } from "./event-form/event-form.component";
import { SponsorAndGuestComponent } from "./sponsor-and-guest/sponsor-and-guest.component";
import { SponsorAndGuestFormComponent } from "./sponsor-and-guest-form/sponsor-and-guest-form.component";
import { BankTypeComponent } from "./bank-type/bank-type.component";
import { BankTypeFormComponent } from './bank-type-form/bank-type-form.component';
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { HotelComponent } from "./hotel/hotel.component";
import { BankComponent } from "./bank/bank.component";
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import {BankFormComponent  } from "./bank-form/bank-form.component";
import { IncomeComponent } from "./income/income.component";
import { IncomeFormComponent } from "./income-form/income-form.component";
import {  PickupAndDropComponent} from "./pickup-and-drop/pickup-and-drop.component";
import {PickupAndDropFromComponent  } from "./pickup-and-drop-from/pickup-and-drop-from.component";
import { ExcellentPerformanceComponent } from "./excellent-performance/excellent-performance.component";
import { ExcellentPerformanceFormComponent } from "./excellent-performance-form/excellent-performance-form.component";
import { TechnologyDetailsComponent } from "./technology-details/technology-details.component";
import {TechnologyDetailsFormComponent  } from "./technology-details-form/technology-details-form.component";
import { ExcellentPerformance } from '../models/excellentPerformance.model';
import { Login } from '../models/login.model';
import { LoginComponent } from './login/login.component';
import { TechDetailsViewComponent } from "./tech-details-view/tech-details-view.component";
import { ExcelPerformViewComponent } from "./excel-perform-view/excel-perform-view.component";
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { sponserviewComponent } from "./sponserview/sponserview.component";
import { EmployeeviewComponent  } from "./employeeview/employeeview.component";
import { PickUpAndDrop } from '../models/pickUpAndDrop.model';
const routes: Routes = [
  { path: 'events', component: BancoEventComponent },
  { path: 'spandgst', component: SponsorAndGuestComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'eventform/:id', component: EventFormComponent },
  { path:'hotelform/:id', component: HotelFormComponent},
  {path:'spandgstform',component:SponsorAndGuestFormComponent},
  {path:'spandgstform/:id',component:SponsorAndGuestFormComponent},
  {path:'banktype',component:BankTypeComponent},
  {path:'banktypeform',component:BankTypeFormComponent},
  {path:'banktypeform/:id',component:BankTypeFormComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employeeform',component:EmployeeFormComponent},
  {path:'hotel',component:HotelComponent},
  {path: 'bank',component:BankComponent},
  {path: 'bankform',component:BankFormComponent},
  {path: 'income' , component:IncomeComponent},
  {path:'incomeform',component:IncomeFormComponent},
  {path:'incomeform/:id',component:IncomeFormComponent},
  {path: 'pickupdrop',component:PickupAndDropComponent},
  {path: 'pickupanddropform',component:PickupAndDropFromComponent},
  {path: 'excellentperformanceform',component:ExcellentPerformanceFormComponent},
  {path: 'technologydetails', component:TechnologyDetailsComponent},
  {path:'technologydetailsform',component:TechnologyDetailsFormComponent},
  {path:'loginapi',component:LoginComponent},
  { path:'fillform/:id/:name', component: BankFormComponent},
  { path:'fillformemployee/:id/:name', component: EmployeeFormComponent},
  {path : 'questionary1', component: ExcellentPerformanceFormComponent},
  {path:'loginapi',component:Login},
  {path: 'techdetailsview',component:TechDetailsViewComponent},
  {path:'exelperformview/:id',component:ExcelPerformViewComponent},
  {path:'bankdetails/:id',component:BankDetailsComponent},
  {path: 'sponserview/:id', component:sponserviewComponent},
  {path:'nextpickup/:id' , component: PickupAndDropComponent },
  {path:'nextpickup/:id' , component: PickupAndDropComponent },
  {path:'nextsponser/:id' , component: PickupAndDropComponent },
  {path: 'sponserviewdetails/:id', component:PickUpAndDrop}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}