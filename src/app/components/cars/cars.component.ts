import {Component, OnInit} from '@angular/core';
import {Car} from "../../models/car";
import {CarService} from "../../services/car/car.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carLoaded: boolean = false;
  cars: Car[] = [];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((result) => {
      this.cars = result.data;
      this.carLoaded = true;
    })
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((result) => {
      this.cars = result.data;
      this.carLoaded = true;
    })
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((result) => {
      this.cars = result.data;
      this.carLoaded = true;
    })
  }

  getCarsWithDetails(car: Car) {

  }
}
