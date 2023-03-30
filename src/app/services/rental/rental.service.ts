import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {Rental} from "../../models/rental";

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl: string = "http://localhost:5250/api/Rentals/getdetails";

  constructor(private httpClient: HttpClient) {
  }

  getRentals(): Observable<ListResponseModule<Rental>> {
    return this.httpClient.get<ListResponseModule<Rental>>(this.apiUrl);
  }
}
