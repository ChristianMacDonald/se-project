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
    if (confirm(`Are you sure you want to delete employee '${this.employees[i].userId}'`)) {
      this.employees.splice(i, 1);
    }
  }
}
