import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { UserDashboardComponent } from './modules/user/components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '**', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
  // { path: 'user', component: UserDashboardComponent },
  // { path: 'admin', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
