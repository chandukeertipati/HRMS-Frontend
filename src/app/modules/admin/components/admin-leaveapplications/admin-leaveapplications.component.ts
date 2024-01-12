import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-leaveapplications',
  templateUrl: './admin-leaveapplications.component.html',
  styleUrl: './admin-leaveapplications.component.scss'
})
export class AdminLeaveapplicationsComponent {
  constructor(private router: Router) { }

  navigateToAddHoliday() {
    this.router.navigate(['Add LeaveApplication']);
  }
}
