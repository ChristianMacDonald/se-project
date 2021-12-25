import { Component, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  @Input() employees: Array<Employee> = [] as Employee[];
  
  constructor() { }

  remove(i: number): void {
    this.employees.splice(i, 1);
  }
}
