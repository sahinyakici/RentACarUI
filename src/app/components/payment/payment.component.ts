import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {PayService} from "../../services/pay/pay.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RentalService} from "../../services/rental/rental.service";
import {Rental} from "../../models/rental";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardOwnerName: string = "";
  cardNumber: string = "";
  cardCvc: string = "";
  cardExpiration: string = "";
  focused: string;
  rental: Rental;

  constructor(private toastrService: ToastrService, private paymentService: PayService, private router: Router, private rentService: RentalService, private activatedRoute: ActivatedRoute) {
  }

  checkexpiry(): boolean {
    if (this.cardExpiration.length == 4) {
      const month = this.cardExpiration.substring(0, 2)
      const year = this.cardExpiration.substring(2, 4)
      const yearNow = parseInt(new Date().getFullYear().toString().substring(2, 4));
      console.log(yearNow)
      if (parseInt(month) > 12 || parseInt(month) < 1) {
        this.toastrService.error("Ay yanlış girildi", "HATA")
        return false;
      }
      if (yearNow > parseInt(year)) {
        this.toastrService.error("Kart son kullanım tarihi geçmiş ya da yanlış girilmiş.", "HATA")
        return false;
      }
      return true;
    }
    return false;
  }

  checkCardOwnerName(): boolean {
    if (this.cardOwnerName.length > 0) {
      const regex = /^[^0-9]+$/;
      if (!regex.test(this.cardOwnerName)) {
        this.toastrService.error("Yalnızca harf girilebilir", "HATA")
        this.cardOwnerName = this.cardOwnerName.slice(0, -1)
        return false;
      }
      return true;
    }
    return false;
  }

  changeFocused(focusField: string) {
    this.focused = focusField;
  }

  checkCardNumber(): boolean {
    if (this.cardNumber.length > 0) {
      const regex = /^\d+$/
      if (!regex.test(this.cardNumber)) {
        this.toastrService.error("Yalnızca rakam içerebilir", "HATA")
        this.cardNumber = this.cardNumber.slice(0, -1)
        return false;
      }
      return true;
    }
    return false;
  }

  checkCardCvc(): boolean {
    if (this.cardCvc.length > 0) {
      const regex = /^\d+$/
      if (!regex.test(this.cardCvc)) {
        this.toastrService.error("Yalnızca rakam içerebilir", "HATA")
        this.cardCvc = this.cardCvc.slice(0, -1)
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  submit() {
    if (this.checkexpiry() && this.checkCardOwnerName() && this.checkCardNumber() && this.checkCardCvc()) {
      this.paymentService.makePay(this.cardNumber, this.cardOwnerName, this.cardCvc, this.cardExpiration)
      this.rentService.makeRent(this.rental)
      this.toastrService.success("Kiralama başarılı", "BASARILI")
      this.router.navigateByUrl("")
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.rental.carId = params["carId"]
      }
    })
  }
}
