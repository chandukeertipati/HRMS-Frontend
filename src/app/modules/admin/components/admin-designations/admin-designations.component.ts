import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-designations',
  templateUrl: './admin-designations.component.html',
  styleUrl: './admin-designations.component.scss'
})
export class AdminDesignationsComponent {
  constructor(private router: Router) { }

  navigateToAddDesignation() {
    this.router.navigate(['Add Designation']);
  }
}

