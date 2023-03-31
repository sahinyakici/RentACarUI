import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {CarImage} from "../../models/carImages";

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl: string = "http://localhost:5250/api/carImages/";

  constructor(private httpClient: HttpClient) {
  }

  getImagesByCarId(carId: number): Observable<ListResponseModule<CarImage>> {
    let newPath = this.apiUrl + "getbycarid?id=" + carId
    return this.httpClient.get<ListResponseModule<CarImage>>(newPath)
  }
}
