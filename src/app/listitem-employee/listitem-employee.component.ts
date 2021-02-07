import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Name } from '../models/name';

@Component({
  selector: 'app-listitem-employee',
  templateUrl: './listitem-employee.component.html',
  styleUrls: ['./listitem-employee.component.css']
})
export class ListitemEmployeeComponent implements OnInit {

  @Input() employee:Employee;
  constructor() { }

  ngOnInit(): void {
  }
}
