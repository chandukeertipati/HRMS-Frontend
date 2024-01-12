import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { faXmark, faPeopleRoof, faSection, faUsers, faProjectDiagram, faBuilding, faFile, faCalendarDays, faPlane, faUserGraduate, faBarChart, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  activeComponentName!: string;
  faClients = faPeopleRoof;
  faDashBoard = faBarChart;
  faDepartment = faSection;
  faDesignation = faUserGraduate;
  faEmployees = faUsers;
  faProjects = faProjectDiagram;
  faDepartments = faBuilding;
  faEmployeeReport = faFile;
  faHolidays = faCalendarDays;
  faLeaveApplication = faPlane;
  faLogOut = faSignOut;
  faViewProfile = faUser;

  profileId: string = 'HR Support';
  profileName: string = 'DefaultAcct-01';

  showSettings: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Get the first child route (i.e., the active route)
        let route = this.activatedRoute.firstChild;

        // Check if route is not null
        while (route && route.firstChild) {
          route = route.firstChild;
        }

        // Check if route and route.snapshot are not null
        if (route && route.snapshot) {
          // Set the component name based on the last child route's snapshot data
          this.activeComponentName = route.snapshot.data['title'] || route.snapshot.routeConfig?.path || 'Default Title';
        } else {
          this.activeComponentName = 'Default Title';
        }
      });
  }

  ngOnInit() {
    // Add logic to fetch profile information (e.g., from a service)
    // For example:
    // this.authService.getProfile().subscribe(profile => {
    //     this.profileId = profile.id;
    //     this.profileName = profile.name;
    // });
  }
  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
  viewProfile() {
    // Add logic to navigate to the profile page
  }

  logout() {
    this.router.navigate(['login']);
  }
}
