import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showLoginForm = false;
  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }
}
