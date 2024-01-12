import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveTypeService } from '../../../../services/leaveType/leave-type.service';
@Component({
  selector: 'app-add-leavetype',
  templateUrl: './add-leavetype.component.html',
  styleUrl: './add-leavetype.component.scss'
})
export class AddLeavetypeComponent {
  leaveTypeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.leaveTypeForm = this.fb.group({
      leaveType: ['', Validators.required],
      numberOfLeavesAllocated: ['', Validators.required],
      creditType: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.leaveTypeForm.valid) {
      // Call the service to add the leave type
      this.leaveTypeService.addLeaveType(this.leaveTypeForm.value).subscribe(
        (newLeaveType) => {
          console.log('Leave type added successfully:', newLeaveType);

          // Navigate back to the leave types list page
          this.router.navigate(['/LeaveTypes']);
        },
        (error) => {
          console.error('Error adding leave type:', error);
        }
      );
    }
  }

  onReset() {
    this.leaveTypeForm.reset();
  }
  onBack() {
    this.router.navigate(['/LeaveTypes']);
  }
}
