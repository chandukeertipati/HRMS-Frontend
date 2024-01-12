import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-leaveapplication',
  templateUrl: './add-leaveapplication.component.html',
  styleUrl: './add-leaveapplication.component.scss'
})
export class AddLeaveapplicationComponent {
  leaveApplicationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.leaveApplicationForm = this.fb.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      noOfDays: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.leaveApplicationForm.value);
  }

  onReset() {
    this.leaveApplicationForm.reset();
  }
  onBack() {
    this.router.navigate(['/LeaveApplications']);
  }
}
