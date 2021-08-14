import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList: Array<Customer> = [
    { customerId: 101, customerName: 'King Kochhar', customerAmount: 12000 },
    { customerId: 102, customerName: 'John Smith', customerAmount: 22000 },
    { customerId: 103, customerName: 'Sarah Bowling', customerAmount: 42000 },
    { customerId: 104, customerName: 'Roger Lee', customerAmount: 32000 },
    { customerId: 105, customerName: 'Greek Lee', customerAmount: 40000 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
