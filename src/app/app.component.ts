import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

import input from '../employees.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'se-project';
  showEmployeeForm = false;
  employeeList: Array<Employee> = input.employees ? input.employees : [] as Employee[];

  constructor() {
  }

  ngOnInit(): void {
      console.log(this.employeeList);
  }

  toggleEmployeeForm(): void {
    this.showEmployeeForm = !this.showEmployeeForm;
  }

  addEmployee(e: string): void {
    console.log(e);
    try {
      let employee: Employee = JSON.parse(e);
      console.log(employee);
      this.employeeList.push(employee);
    } catch {
      console.log('Failed to parse JSON string');
    }
  }
}