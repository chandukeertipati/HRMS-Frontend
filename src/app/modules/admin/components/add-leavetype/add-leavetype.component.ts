import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-leavetype',
  templateUrl: './add-leavetype.component.html',
  styleUrl: './add-leavetype.component.scss'
})
export class AddLeavetypeComponent {
  leaveTypeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.leaveTypeForm = this.fb.group({
      leaveType: ['', Validators.required],
      noOfLeaves: ['', Validators.required],
      creditType: ['', Validators.required],

    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.leaveTypeForm.value);
  }

  onReset() {
    this.leaveTypeForm.reset();
  }
  onBack() {
    this.router.navigate(['/LeaveTypes']);
  }
}
