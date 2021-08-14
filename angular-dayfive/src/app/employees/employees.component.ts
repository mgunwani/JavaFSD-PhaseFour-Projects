import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title: string = "";

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.title = this._employeeService.message;
    this._employeeService.getEmployees().subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    })
  }

}
