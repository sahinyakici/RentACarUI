import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";
import {Customer} from "../../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl: string = "http://localhost:5250/api/customers/getall";

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<ListResponseModule<Customer>> {
    return this.httpClient.get<ListResponseModule<Customer>>(this.apiUrl)
  }
}
