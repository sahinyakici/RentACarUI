import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pay} from "../../models/pay";
import {ListResponseModule} from "../../models/ResponseModels/listResponseModule";

@Injectable({
  providedIn: 'root'
})
export class PayService {
  apiUrl: string = "http://localhost:5250/api/pay/";

  constructor(private httpClient: HttpClient) {
  }

  makePay(cardNumber: string, cardOwner: string, cardCvc: string, cardExp: string) {
    const payDetails: Pay = {cardNumber: cardNumber, cardOwner: cardOwner, cardCvc: cardCvc, cardExpiration: cardExp};
    return this.httpClient.post<ListResponseModule<Pay>>(this.apiUrl, payDetails);
  }
}
