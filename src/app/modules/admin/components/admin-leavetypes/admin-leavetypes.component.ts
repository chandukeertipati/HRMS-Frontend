import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-leavetypes',
  templateUrl: './admin-leavetypes.component.html',
  styleUrl: './admin-leavetypes.component.scss'
})
export class AdminLeavetypesComponent {
  constructor(private router: Router) { }

  navigateToAddHoliday() {
    this.router.navigate(['Add LeaveType']);
  }
}
