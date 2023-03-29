import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarResponseModel} from "../../models/ResponseModels/carResponseModel";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl: string = "http://localhost:5250/api/cars/getcardetails"

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
