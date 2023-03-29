import {Component, OnInit} from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customer/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerLoaded: boolean = false;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((result) => {
      this.customers = result.data;
      this.customerLoaded = true;
    })
  }
}
