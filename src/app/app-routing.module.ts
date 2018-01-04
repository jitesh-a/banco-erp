import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoEventComponent } from "./banco-event/banco-event.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventFormComponent } from "./event-form/event-form.component";

const routes: Routes = [
  { path: 'events', component: BancoEventComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'eventform/:id', component: EventFormComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}