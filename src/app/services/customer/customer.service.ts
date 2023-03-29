import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerResponseModel} from "../../models/ResponseModels/customerResponseModel";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl: string = "http://localhost:5250/api/customers/getall";

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl)
  }
}
