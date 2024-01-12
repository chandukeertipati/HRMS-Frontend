import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrl: './admin-employees.component.scss'
})
export class AdminEmployeesComponent {
  constructor(private router: Router) { }

  navigateToAddEmployee() {
    this.router.navigate(['Add Employee']);
  }
}
