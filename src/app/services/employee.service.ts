import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

const headers = {
  'Content-Type': 'application/json'
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  date = new Date().toISOString().slice(0, 10);
  url = "https://randomuser.me/api/?results=43";

  employees: Employee[] = [
    
  ];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  constructor(private httpClient: HttpClient) { }

//@ts-ignore
  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
