import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeService {

    message: string = "Employee Management System";

    constructor(private _http: HttpClient) { }

    getEmployees(): Observable<any> {
        return this._http.get<any>('http://localhost:3000/employees');
    }

    getEmployeeById() { }

    addEmployee(employee: any) { }

    deleteEmployeeById(id: any) { }

    updateEmployeeById(employee: any, id: any) { }

}