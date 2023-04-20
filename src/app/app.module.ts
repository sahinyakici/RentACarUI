import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrandComponent} from './components/brand/brand.component';
import {ColorComponent} from './components/color/color.component';
import {CustomerComponent} from './components/customer/customer.component';
import {CarsComponent} from './components/cars/cars.component';
import {RentalComponent} from './components/rental/rental.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';
import {FormsModule} from "@angular/forms";
import {FilterCarPipePipe} from './pipes/filter-car-pipe.pipe';
import {FilterBrandPipePipe} from './pipes/filter-brand-pipe.pipe';
import {FilterColorPipePipe} from './pipes/filter-color-pipe.pipe';
import {VatPipe} from './pipes/vat.pipe';
import {CarouselComponent} from './components/carousel/carousel.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PaymentComponent } from './components/payment/payment.component';
import {NgCreditCardModule} from "angular-credit-card";

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarsComponent,
    RentalComponent,
    CarDetailComponent,
    FilterCarPipePipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    VatPipe,
    CarouselComponent,
    PaymentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: "toast-bottom-right"
        }),
        NgCreditCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
