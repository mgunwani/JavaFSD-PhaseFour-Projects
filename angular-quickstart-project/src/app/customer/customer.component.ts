import { ICustomer } from './../models/customer.interface';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  // Logics Here

  message: string = "Customer Management System";

  custObj: any = {
    custCode: 1001,
    custName: 'King Kochhar',
    custAmount: 12000
  };

  customerObj1: Customer = new Customer();

  customerObj2: Customer = {
    CustomerCode: "K101",
    CustomerName: "Ling Kochhar",
    CustomerAmount: 10000
  };

  customerObj3: ICustomer = {
    CustomerCode: "J1001",
    CustomerName: "John Smith",
    CustomerAmount: 20000
  }

}
