import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../../services/department/department.service';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  faBuilding = faBuilding;
  departmentCount!: number;

  constructor(private departmentCountService: DepartmentService) { }

  ngOnInit(): void {
    this.fetchDepartmentCount();
  }

  fetchDepartmentCount() {
    this.departmentCountService.getDepartmentCount().subscribe((count) => {
      this.departmentCount = count;
    });
  }
} {

}
