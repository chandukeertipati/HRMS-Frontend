import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;
  clientNames: string[] = ['Client A', 'Client B', 'Client C']; // Replace with actual endpoint data

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      clientProjectCode: ['', Validators.required],
      projectName: ['', Validators.required],
      description: [''],
      primaryContactPersonName: ['', Validators.required],
      primaryContactPersonEmail: ['', [Validators.required, Validators.email]],
      secondaryContactPersonName: [''],
      secondaryContactPersonEmail: ['', Validators.email],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      clientName: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onClientNameChange(event: MatSelectChange): void {
    // Handle client name selection if needed
  }

  onSubmit(): void {

    if (this.projectForm.valid) {
      console.log('Form submitted:', this.projectForm.value);

    }
  }

  onReset(): void {
    this.projectForm.reset();
  }

  onBack(): void {
    this.router.navigate(['/Projects']);
  }
}
