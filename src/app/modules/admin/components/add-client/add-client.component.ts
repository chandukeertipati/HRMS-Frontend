import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent implements OnInit {

  // Reactive Form Group
  clientForm!: FormGroup;
  statusOptions = ['Active', 'Inactive'];


  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.pattern('^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?$')],
      primaryContactPersonName: ['', Validators.required],
      primaryContactPersonAddress: ['', Validators.required],
      secondaryContactPersonName: [''],
      secondaryContactPersonEmail: ['', Validators.email],
      status: ['Active', Validators.required]
    });
  }


  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Form submitted:', this.clientForm.value);
    } else {
      this.clientForm.markAllAsTouched();
    }
  }

  onBack() {
    this.router.navigate(['/Clients']);
  }
}
