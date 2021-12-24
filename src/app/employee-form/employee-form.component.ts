import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  @Output() newEmployeeEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      userId: '',
      jobTitleName: '',
      firstName: '',
      lastName: '',
      preferredFullName: '',
      employeeCode: '',
      region: '',
      phoneNumber: '',
      emailAddress: ''
    });
  }

  addNewEmployee(): void {
    this.newEmployeeEvent.emit(JSON.stringify(this.employeeForm.value));
  }
}
