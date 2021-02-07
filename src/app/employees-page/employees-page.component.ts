import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  employees : Employee[];

  ngOnInit(): void {
    // this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = Object.values(response)[0];
      console.log(Object.values(response)[0])
     });
  }

  addEmployee(name: string){

    let date = new Date().toISOString().slice(0, 10);
    // let employee : Employee = new Employee(name,date);
    // this.employees.push(employee);
    // this.employeeService.addEmployee(employee);
  }
}
