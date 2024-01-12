import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-holidays',
  templateUrl: './admin-holidays.component.html',
  styleUrl: './admin-holidays.component.scss'
})
export class AdminHolidaysComponent {
  constructor(private router: Router) { }

  navigateToAddHoliday() {
    this.router.navigate(['Add Holiday']);
  }
}
