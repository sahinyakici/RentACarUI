import {Component, OnInit} from '@angular/core';
import {Rental} from "../../models/rental";
import {RentalService} from "../../services/rental/rental.service";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalLoaded: boolean = false;

  constructor(private rentalService: RentalService) {
  }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((result) => {
      this.rentals = result.data;
      this.rentalLoaded = true;
    })
  }
}
