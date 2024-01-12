import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrl: './admin-clients.component.scss'
})
export class AdminClientsComponent {
  constructor(private router: Router) { }

  navigateToAddClient() {
    this.router.navigate(['Add Client']);
  }
}
