import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();
  employeeForm: FormGroup;

  constructor(private _employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    private _router: Router) {
    this.employeeForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      salary: [0, [Validators.required]],
      designation: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  get f() {
    return this.employeeForm.controls;
  }

  addEmployee() {

    this._employeeService.addEmployee(this.employee).subscribe(result => {
      console.log(result);
      alert('Employee Added Successfully.')
      this._router.navigate(['/employees']);
    }, error => {
      console.log(error);
    })

  }

}
