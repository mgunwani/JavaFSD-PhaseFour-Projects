import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeService {

    message: string = "Employee Management System";
    API_URL: string = "http://localhost:3000";

    constructor(private _http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this._http.get<Employee[]>(`${this.API_URL}/employees`);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this._http.get<Employee>(`${this.API_URL}/employees/${id}`);
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this._http.post<Employee>(`${this.API_URL}/employees`, employee);
    }

    deleteEmployeeById(id: number): Observable<Employee> {
        return this._http.delete<Employee>(`${this.API_URL}/employees/${id}`);
    }

    updateEmployeeById(updatedEmployee: Employee, id: number): Observable<Employee> {
        return this._http.put<Employee>(`${this.API_URL}/employees/${id}`, updatedEmployee);
    }

}