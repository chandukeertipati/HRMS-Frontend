import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrl: './add-designation.component.scss'
})
export class AddDesignationComponent {
  designationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  private createForm() {
    this.designationForm = this.fb.group({
      designationName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    // event: Event
    // event.preventDefault();
    // Handle form submission logic here
    // You can access form values using this.departmentForm.value
    console.log(this.designationForm.value);
    this.designationForm.reset();
  }

  onBack() {
    this.router.navigate(['/Departments']);
  }
}
