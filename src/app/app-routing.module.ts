import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoEventComponent } from "./banco-event/banco-event.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventFormComponent } from "./event-form/event-form.component";
import { SponsorAndGuestComponent } from "./sponsor-and-guest/sponsor-and-guest.component";
import { SponsorAndGuestFormComponent } from "./sponsor-and-guest-form/sponsor-and-guest-form.component";
import { BankTypeComponent } from "./bank-type/bank-type.component";
import { BankTypeFormComponent } from './bank-type-form/bank-type-form.component';
<<<<<<< HEAD
import { HotelComponent } from "./hotel/hotel.component";
=======
import { BankComponent } from "./bank/bank.component";


>>>>>>> b1c974c43310b2b1401526603f75854759601678
const routes: Routes = [
  { path: 'events', component: BancoEventComponent },
  { path: 'spandgst', component: SponsorAndGuestComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'eventform/:id', component: EventFormComponent },
  {path:'spandgstform',component:SponsorAndGuestFormComponent},
  {path:'banktype',component:BankTypeComponent},
  {path:'banktypeform',component:BankTypeFormComponent},
<<<<<<< HEAD
  {path:'hotel',component:HotelComponent}

=======
  {path: 'bank',component:BankComponent}
>>>>>>> b1c974c43310b2b1401526603f75854759601678
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}