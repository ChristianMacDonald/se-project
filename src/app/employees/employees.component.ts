import { Component } from '@angular/core';

import input from '../../employees.json';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employees: Array<Employee> = input.employees;

  constructor() { }

  handleClick() {
    alert('clicked');
  }
}
