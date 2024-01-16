import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../../../services/employee/employee.service';
import { Employee } from '../../../../interfaces/employee';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrl: './admin-employees.component.scss'
})
export class AdminEmployeesComponent implements OnInit {
  employee: Employee[] = [];
  displayedColumns: string[] = ['name', 'email', 'designation', 'status', 'actions'];
  employees!: MatTableDataSource<any>;
  constructor(private router: Router, private employeeService: EmployeeService) { }
  ngOnInit() {
    // Fetch employees data from your service and set it to MatTableDataSource
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = new MatTableDataSource(data);
    });
  }
  navigateToAddEmployee() {
    this.router.navigate(['Add Employee']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employees.filter = filterValue.trim().toLowerCase();
  }

  editEmployee(employee: any) {
    // Implement edit functionality
    console.log('Edit employee:', employee);
  }

  deleteEmployee(employee: any) {
    // Call the delete method based on the employee's id
    this.employeeService.deleteEmployee(employee.id).subscribe(() => {
      // Update the data source after successful deletion
      this.employeeService.getAllEmployees().subscribe(data => {
        this.employees = new MatTableDataSource(data);
      });
      console.log('Delete employee:', employee);
    });
  }
}
