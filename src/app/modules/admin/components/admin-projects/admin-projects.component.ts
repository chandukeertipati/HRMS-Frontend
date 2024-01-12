import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrl: './admin-projects.component.scss'
})
export class AdminProjectsComponent {
  constructor(private router: Router) { }

  navigateToAddProject() {
    this.router.navigate(['Add Project']);
  }
}
