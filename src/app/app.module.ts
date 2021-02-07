import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { EmployeeService } from './services/employee.service';
import { Transaction } from './models/transaction';
import { TransactionService } from './services/transaction.service';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';

import { ListitemEmployeeComponent } from './listitem-employee/listitem-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    EmployeesPageComponent,
    SearchEmployeeComponent,
    AddEmployeeComponent,
    ListitemEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
