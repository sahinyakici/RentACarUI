import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalResponseModel} from "../../models/ResponseModels/rentalResponseModel";

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl: string = "http://localhost:5250/api/Rentals/getdetails";

  constructor(private httpClient: HttpClient) {
  }

  getRentals(): Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
