import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../../interfaces/department';
import { DepartmentService } from '../../../../services/department/department.service';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrl: './admin-departments.component.scss'
})
export class AdminDepartmentsComponent implements OnInit {
  departments: Department[] = [];
  constructor(private router: Router, private departmentService: DepartmentService) { }
  ngOnInit() {
    this.loadDepartments();
  }
  navigateToAddDepartment() {
    this.router.navigate(['Add Department']);
  }
  private loadDepartments() {
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }
  viewDepartment(department: Department) {
    // Implement view logic here if needed
    console.log('View department:', department);
  }

  editDepartment(department: Department) {
    // Implement edit logic here if needed
    console.log('Edit department:', department);
  }

  deleteDepartment(department: Department) {
    const confirmDelete = confirm('Are you sure you want to delete this department?');
    if (confirmDelete) {
      const departmentId = department.id;
      this.departmentService.deleteDepartment(departmentId).subscribe(
        () => {
          console.log('Department deleted successfully');
          // Remove the deleted department from the local array
          this.departments = this.departments.filter(d => d.id !== departmentId);
          // Reload departments after deletion
          this.loadDepartments();
        },
        (error) => {
          console.error('Error deleting department:', error);
        }
      );
    }
  }
}
