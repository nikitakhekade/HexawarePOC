
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeServiceService } from './employee/services/employee-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './employee/components/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './employee/components/authenticate/authenticate.component';
import { AddEmployeeComponent } from './employee/components/add-employee/add-employee.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { RouterLinkActive } from '@angular/router';

describe('AppComponent', () => {
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        CommonModule, 
        HttpClientModule,
        RouterTestingModule,
        RouterLinkActive
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        DashboardComponent,
        HomeComponent,
        AuthenticateComponent,
        AddEmployeeComponent
      ],
      providers:[
        EmployeeServiceService,
        HttpClient,
         HttpHandler,
         
      ],
      
      
    }).compileComponents();
    
    let service = TestBed.inject(EmployeeServiceService);
    let httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    let httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'employee'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('employee');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('employee');
  // });

 
});
