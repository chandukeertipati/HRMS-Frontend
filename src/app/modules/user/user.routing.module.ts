import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserHolidaylistComponent } from './components/user-holidaylist/user-holidaylist.component';
import { UserLeaveapplicationsComponent } from './components/user-leaveapplications/user-leaveapplications.component';
const routes: Routes = [
    {
        path: '', component: UserDashboardComponent, children: [
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'Holidays', component: UserHolidaylistComponent },
            { path: 'LeaveApplications', component: UserLeaveapplicationsComponent },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }