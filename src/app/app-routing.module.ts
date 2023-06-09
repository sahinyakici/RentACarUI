import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {RentalComponent} from "./components/rental/rental.component";
import {CarDetailComponent} from "./components/car-detail/car-detail.component";
import {PaymentComponent} from "./components/payment/payment.component";

const routes: Routes = [{path: "", pathMatch: "full", component: CarsComponent}, {
  path: "cars",
  component: CarsComponent
}, {path: "cars/brands", redirectTo: "", component: CarsComponent}, {
  path: "cars/colors",
  redirectTo: "",
  component: CarsComponent
}, {
  path: "customers",
  component: CustomerComponent
}, {path: "rentals", component: RentalComponent}, {
  path: "cars/brands/:brandId",
  component: CarsComponent
}, {path: "cars/colors/:colorId", component: CarsComponent}, {
  path: "cars/detail/:carId",
  component: CarDetailComponent
}, {path: "rental/:carId", component: RentalComponent}, {path: "pay/:carId", component: PaymentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
