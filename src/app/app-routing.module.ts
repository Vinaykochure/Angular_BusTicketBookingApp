import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AvailableBusesComponent } from './components/available-buses/available-buses.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './components/journey-summary/journey-summary.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectSeatsComponent } from './components/select-seats/select-seats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'availablebuses', component: AvailableBusesComponent },
  { path: 'buses/:id', component: SelectSeatsComponent },
  { path: 'passengerInfo', component: PassengerInfoComponent },
  { path: 'journeyDetails/:id', component: JourneySummaryComponent },
  { path: 'viewticket/:id', component: ViewTicketComponent },

  { path: 'notfound', component: NotFoundComponent },
  //when path not match
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }