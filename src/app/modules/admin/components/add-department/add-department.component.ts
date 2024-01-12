import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../../services/department/department.service';
import { Department } from '../../../../interfaces/department';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.scss'
})
export class AddDepartmentComponent {
  departmentForm!: FormGroup;
  department: Department | undefined;
  constructor(private fb: FormBuilder, private router: Router, private departmentService: DepartmentService) {
    this.createForm();
  }


  // rando = Math.random();
  private createForm() {
    this.departmentForm = this.fb.group({
      departmentName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData: Department = this.departmentForm.value;

    // Call the service to add the department
    this.departmentService.addDepartment(formData).subscribe(
      (response) => {
        // this.toastr.success('Department added successfully:', 'Success');
        console.log('Department added successfully:', response);
        this.departmentForm.reset();
        // Optionally, navigate to the department list or do other actions
      },
      (error) => {
        console.error('Error adding department:', error);
      }
    );
  }

  onBack() {
    this.router.navigate(['/Departments']);
  }
}
