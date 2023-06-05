import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee/components/dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { AddEmployeeComponent } from './employee/components/add-employee/add-employee.component';
import { AuthenticateComponent } from './employee/components/authenticate/authenticate.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'menu', component:MenuComponent},
  { path: 'content', component: ContentComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/add', component: AddEmployeeComponent },
  { path: 'employees', component: EmployeeDetailsComponent },
  { path: 'employee/authenticate', component: AuthenticateComponent},
  { path: 'dashboard', component: DashboardComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
