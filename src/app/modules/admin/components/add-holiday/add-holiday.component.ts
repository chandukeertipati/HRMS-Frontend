import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrl: './add-holiday.component.scss'
})
export class AddHolidayComponent {
  holidayForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.holidayForm = this.fb.group({
      holidayName: ['', Validators.required],
      holidayDate: ['', Validators.required],
      holidayType: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.holidayForm.value);
  }

  onReset() {
    this.holidayForm.reset();
  }
  onBack() {
    this.router.navigate(['/Holidays']);
  }
}
