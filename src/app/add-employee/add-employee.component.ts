import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  template: `
  <form>
    <input class="employee-name" type="text" placeholder="{{placeholder}}" ([ngModel]) = "entered"/>
    <input class="submit-btn" type = "submit" value= "{{buttonText}}" (click)="addNewEmployee()"/>
</form>
  `,
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  entered: string;
  @Output() employeeName: EventEmitter<String> = new EventEmitter();
  @Input() placeholder : string;
  @Input() buttonText : string;

  constructor() { }

  ngOnInit(): void {
  }

  addNewEmployee() {
    this.employeeName.emit(this.entered);
  }

}
