import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.employeeForm = this.fb.group({
      employeeCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      priorYearExperience: [''],
      experienceInNstarx: [''],
      departmentName: [''],
      designation: [''],
      joiningDate: [''],
      employeeType: [''],
      manager: [''],
      reportingPerson: [''],
      isAdmin: [''],
      status: ['']
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.employeeForm.value);
  }

  onReset() {
    this.employeeForm.reset();
  }
  onBack() {
    this.router.navigate(['/Employees']);
  }
}
