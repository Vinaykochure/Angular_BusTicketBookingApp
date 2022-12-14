import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AvailableBusesComponent } from './components/available-buses/available-buses.component';
import { SeatBookingService } from './services/seat-booking.service';
import { TicketGenerateService } from './services/ticket-generate.service';
import { SelectSeatsComponent } from './components/select-seats/select-seats.component';
import { SeatNamePipe } from './pipes/seatname.pipe';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './components/journey-summary/journey-summary.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { MyUpperPipe } from './pipes/myUpper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    AvailableBusesComponent,
    SelectSeatsComponent,
    SeatNamePipe,
    PassengerInfoComponent,
    JourneySummaryComponent,
    ViewTicketComponent,
    MyUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SeatBookingService,
    TicketGenerateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
