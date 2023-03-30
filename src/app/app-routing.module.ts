import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {RentalComponent} from "./components/rental/rental.component";

const routes: Routes = [{path: "", pathMatch: "full", component: CarsComponent}, {
  path: "cars",
  component: CarsComponent
}, {
  path: "customers",
  component: CustomerComponent
}, {path: "rentals", component: RentalComponent}, {
  path: "cars/brands/:brandId",
  component: CarsComponent
}, {path: "cars/colors/:colorId", component: CarsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
