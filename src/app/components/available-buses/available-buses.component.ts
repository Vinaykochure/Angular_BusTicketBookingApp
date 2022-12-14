import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../../services/seat-booking.service';
import { IBus } from '../../interfaces/bus';
import { Location } from '@angular/common'

@Component({
  selector: 'app-available-buses',
  templateUrl: './available-buses.component.html',
  styleUrls: ['./available-buses.component.css']
})
export class AvailableBusesComponent implements OnInit {

  availableBuses: IBus[] | undefined = undefined;
  keys = ["Bus Name", "Departure Time", "Coach Type", "Seats Available", "Fare"];
  constructor(private seatBookingService: SeatBookingService,
    private location: Location) { }

  ngOnInit(): void {
    this.availableBuses = this.seatBookingService.getFilteredBuses();
  }

  navigateBack() {
    this.location.back();
  }
}