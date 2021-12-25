import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

import input from '../employees.json';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'se-project';
  showEmployeeForm = false;
  employeeList: Array<Employee> = input.employees ? input.employees : [] as Employee[];
  downloadJsonHref: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
      console.log(this.employeeList);
      this.generateDownloadJsonUri();
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
    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri(): void {
    let data = JSON.stringify({ "employees": this.employeeList });
    let uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(data));
    this.downloadJsonHref = uri;
  }
}