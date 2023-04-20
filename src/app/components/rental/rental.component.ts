import {Component, OnInit} from '@angular/core';
import {RentalService} from "../../services/rental/rental.service";
import {CarDetail} from "../../models/carDetail";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../services/car/car.service";
import {CarImageService} from "../../services/carImage/car-image.service";
import {ToastrService} from "ngx-toastr";
import {Rental} from "../../models/rental";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  carDetails: CarDetail[] = [];
  rentals: Rental[] = [];
  images: string[] = [];
  currentImage: string;
  pickUpDate: string;
  returnDate: string;
  totalPrice: number = 0;

  constructor(private toastrService: ToastrService, private rentalService: RentalService, private activatedRoute: ActivatedRoute, private carDetailService: CarService, private carImageService: CarImageService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarImages(params["carId"])
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarImages(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe(value => {
      value.data.map(value1 => this.images = value1.imagePath.split(","))
        this.images = value.data.map(value1 => value1.imagePath.split(",")).flat();
      this.currentImage = this.images[0];
    })
  }

  getCarDetails(carId: number) {
    this.carDetailService.getCarDetailsById(carId).subscribe((result) => {
      this.carDetails = result.data;
      this.setPriceAndDays();
    })
  }

  setPriceAndDays() {
    this.carDetails.map(c => {
      this.totalPrice = c.dailyPrice
    })
  }

  checkReturnDate() {
    let diffInDays: number = this.calculateDayDiffrence(this.returnDate, this.pickUpDate)
    if (diffInDays < 0) {
      this.returnDate = this.pickUpDate;
      this.toastrService.error("Teslim tarihi kiralama tarihinden önce olamaz", "HATA")
      diffInDays = 1
    }
    if (diffInDays == 0) {
      diffInDays++;
    }
    this.priceCalculate(diffInDays)
  }

  checkValuesAndGetPay(carId: number) {
    this.rentalService.getRentalsByCarId(carId).subscribe((result) => {
      this.rentals = result.data;
      if (this.rentals.length == 0)
        this.router.navigateByUrl('/pay/' + carId);
      else
        this.getCheckRental(carId);
    })
  }

  calculateDayDiffrence(dateForReturn: string, dateForPickUp: string) {
    const dateForReturnMS = this.convertToMs(dateForReturn)
    const dateForPickUpMS = this.convertToMs(dateForPickUp)
    const diffInMilliseconds = dateForReturnMS - dateForPickUpMS;
    return diffInMilliseconds / (1000 * 60 * 60 * 24);
  }

  convertToMs(date: string): number {
    const data = date.split("-")
    const year = parseInt(data[0]);
    const month = parseInt(data[1]);
    const day = parseInt(data[2]);
    return new Date(year, month, day).getTime()
  }

  getCheckRental(carId: number) {
    this.rentals.map(value => {
        const diff = this.calculateDayDiffrence(value.returnDate.toString().substring(0, value.returnDate.toString().length - 9), this.pickUpDate)
        if (value.returnDate == null || diff > 0) {
          this.toastrService.error("Bu araç şuan kiralamada", "HATA")
          return;
        } else {
          this.router.navigateByUrl('/pay/' + carId);
        }
      }
    )
  }

  priceCalculate(dayCount: number) {
    this.carDetails.map(t => this.totalPrice = dayCount * t.dailyPrice)
  }
}
