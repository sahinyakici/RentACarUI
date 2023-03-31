import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {Car} from "../../models/car";
import {CarDetail} from "../../models/carDetail";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl: string = "http://localhost:5250/api/cars/"

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + "getcardetails";
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + "getdetailsbybrand?brandId=" + brandId
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + "getdetailsbycolor?colorId=" + colorId
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  getCarDetailsById(id: number): Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + "getdetailbyid?carId=" + id
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath)
  }
}
