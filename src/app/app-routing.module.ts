import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoEventComponent } from "./banco-event/banco-event.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventFormComponent } from "./event-form/event-form.component";
import { SponsorAndGuestComponent } from "./sponsor-and-guest/sponsor-and-guest.component";
import { SponsorAndGuestFormComponent } from "./sponsor-and-guest-form/sponsor-and-guest-form.component";

const routes: Routes = [
  { path: 'events', component: BancoEventComponent },
  { path: 'spandgst', component: SponsorAndGuestComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'eventform/:id', component: EventFormComponent },
  {path:'spandgstform',component:SponsorAndGuestFormComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}