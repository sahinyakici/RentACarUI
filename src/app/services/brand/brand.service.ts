import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {Brand} from "../../models/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = 'http://localhost:5250/api/brands/';

  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<ListResponseModule<Brand>> {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModule<Brand>>(newPath);
  }

  getBrandsById(id: number): Observable<ListResponseModule<Brand>> {
    let newPath = this.apiUrl + "getbyid?id=" + id
    return this.httpClient.get<ListResponseModule<Brand>>(newPath)
  }
}
