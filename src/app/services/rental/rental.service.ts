import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {Rental} from "../../models/rental";

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl: string = "http://localhost:5250/api/Rentals/";

  constructor(private httpClient: HttpClient) {
  }

  getRentals(): Observable<ListResponseModule<Rental>> {
    let newPath = this.apiUrl + "getdetails"
    return this.httpClient.get<ListResponseModule<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number): Observable<ListResponseModule<Rental>> {
    let newPath = this.apiUrl + "getdetailsbycarid?carId=" + carId
    console.log(newPath)
    return this.httpClient.get<ListResponseModule<Rental>>(newPath);
  }

  makeRent(rental: Rental): Observable<ListResponseModule<Rental>> {
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ListResponseModule<Rental>>(newPath, rental);
  }
}
