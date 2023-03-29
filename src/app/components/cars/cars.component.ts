import {Component, OnInit} from '@angular/core';
import {Car} from "../../models/car";
import {CarService} from "../../services/car/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carLoaded: boolean = false;
  cars: Car[] = [];

  constructor(private carService: CarService) {
  }
  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe((result) => {
      this.cars = result.data;
      this.carLoaded = true;
    })
  }
}
