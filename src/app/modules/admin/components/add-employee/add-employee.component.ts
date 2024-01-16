import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../services/employee/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

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
      designation: ['', Validators.required],
      joiningDate: [''],
      employeeType: [''],
      manager: [''],
      reportingPerson: [''],
      isAdmin: [''],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic here
    // console.log('Form submitted:', this.employeeForm.value);
    if (this.employeeForm.valid) {
      // Call the service to add the employee
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(
        (response) => {
          console.log('Employee added successfully:', response);
          // Optionally, navigate to a different page after successful submission
          // this.router.navigate(['/Employees']);
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error adding employee:', error);
        }
      );
    }
  }

  onReset() {
    this.employeeForm.reset();
  }
  onBack() {
    this.router.navigate(['/Employees']);
  }
}
