import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Transaction } from '../models/transaction';
import { EmployeeService } from '../services/employee.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  employees: Employee[];
  transactions: Transaction[];

  constructor(private employeeService: EmployeeService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    console.log("working")
    this.employeeService.getEmployees().subscribe(response => {
     this.employees = Object.values(response)[0];
     console.log(Object.values(response)[0]);
     
    });
    this.transactions = this.transactionService.getTransactions();
  }
}