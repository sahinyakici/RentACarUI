import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {Color} from "../../models/color";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:5250/api/colors/";

  constructor(private httpClient: HttpClient) {
  }

  getColors(): Observable<ListResponseModule<Color>> {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModule<Color>>(newPath);
  }

  getColorsById(id: number): Observable<ListResponseModule<Color>> {
    let newPath = this.apiUrl + "getbyid?id=" + id
    return this.httpClient.get<ListResponseModule<Color>>(newPath)
  }
}
