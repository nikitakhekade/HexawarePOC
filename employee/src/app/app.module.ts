import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentToChildComponent } from './content/components/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './content/components/child-to-parent/child-to-parent.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateComponent } from './employee/components/authenticate/authenticate.component';
import { DashboardComponent } from './employee/components/dashboard/dashboard.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    AuthenticateComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
