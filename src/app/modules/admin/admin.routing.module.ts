import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDepartmentsComponent } from './components/admin-departments/admin-departments.component';
import { AdminDesignationsComponent } from './components/admin-designations/admin-designations.component';
import { AdminEmployeereportComponent } from './components/admin-employeereport/admin-employeereport.component';
import { AdminHolidaysComponent } from './components/admin-holidays/admin-holidays.component';
import { AdminLeaveapplicationsComponent } from './components/admin-leaveapplications/admin-leaveapplications.component';
import { AdminLeavereportComponent } from './components/admin-leavereport/admin-leavereport.component';
import { AdminLeavetypesComponent } from './components/admin-leavetypes/admin-leavetypes.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { AdminEmployeesComponent } from './components/admin-employees/admin-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddDesignationComponent } from './components/add-designation/add-designation.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
import { AddLeaveapplicationComponent } from './components/add-leaveapplication/add-leaveapplication.component';
import { AddLeavetypeComponent } from './components/add-leavetype/add-leavetype.component';
const routes: Routes = [
    {
        path: '', component: AdminDashboardComponent, children: [
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'Employees', component: AdminEmployeesComponent },
            { path: 'Departments', component: AdminDepartmentsComponent },
            { path: 'Designations', component: AdminDesignationsComponent },
            { path: 'Clients', component: AdminClientsComponent },
            { path: 'Projects', component: AdminProjectsComponent },
            { path: 'Holidays', component: AdminHolidaysComponent },
            { path: 'LeaveApplications', component: AdminLeaveapplicationsComponent },
            { path: 'LeaveTypes', component: AdminLeavetypesComponent },
            { path: 'EmployeeReport', component: AdminEmployeereportComponent },
            { path: 'LeaveReport', component: AdminLeavereportComponent },
            { path: 'Add Employee', component: AddEmployeeComponent },
            { path: 'Add Department', component: AddDepartmentComponent },
            { path: 'Add Designation', component: AddDesignationComponent },
            { path: 'Add Client', component: AddClientComponent },
            { path: 'Add Project', component: AddProjectComponent },
            { path: 'Add Holiday', component: AddHolidayComponent },
            { path: 'Add LeaveApplication', component: AddLeaveapplicationComponent },
            { path: 'Add LeaveType', component: AddLeavetypeComponent }
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }