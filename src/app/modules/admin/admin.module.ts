import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminRoutingModule } from './admin.routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDepartmentsComponent } from './components/admin-departments/admin-departments.component';
import { AdminDesignationsComponent } from './components/admin-designations/admin-designations.component';
import { AdminEmployeereportComponent } from './components/admin-employeereport/admin-employeereport.component';
import { AdminEmployeesComponent } from './components/admin-employees/admin-employees.component';
import { AdminHolidaysComponent } from './components/admin-holidays/admin-holidays.component';
import { AdminLeaveapplicationsComponent } from './components/admin-leaveapplications/admin-leaveapplications.component';
import { AdminLeavereportComponent } from './components/admin-leavereport/admin-leavereport.component';
import { AdminLeavetypesComponent } from './components/admin-leavetypes/admin-leavetypes.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddDesignationComponent } from './components/add-designation/add-designation.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
import { AddLeaveapplicationComponent } from './components/add-leaveapplication/add-leaveapplication.component';
import { AddLeavetypeComponent } from './components/add-leavetype/add-leavetype.component';
@NgModule({
    declarations: [
        AdminDashboardComponent,
        AdminSidebarComponent,
        DashboardComponent,
        AdminEmployeesComponent,
        AdminDepartmentsComponent,
        AdminDesignationsComponent,
        AdminClientsComponent,
        AdminProjectsComponent,
        AdminHolidaysComponent,
        AdminLeaveapplicationsComponent,
        AdminLeavetypesComponent,
        AdminEmployeereportComponent,
        AdminLeavereportComponent,
        AddEmployeeComponent,
        AddDepartmentComponent,
        AddDesignationComponent,
        AddClientComponent,
        AddProjectComponent,
        AddHolidayComponent,
        AddLeaveapplicationComponent,
        AddLeavetypeComponent
    ],
    imports: [
        AdminRoutingModule,
        CommonModule,
        SharedModule
    ],
})
export class AdminModule { }