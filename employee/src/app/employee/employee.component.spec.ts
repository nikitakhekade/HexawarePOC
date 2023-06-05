import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeServiceService } from './services/employee-service.service';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let httpMock: HttpTestingController;
  let service: EmployeeServiceService;
  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        getAll: () => []
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, HttpClientModule, HttpClientTestingModule, AppRoutingModule],
      declarations: [EmployeeComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        EmployeeServiceService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(EmployeeServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send an HTTP GET request to authenticate user', fakeAsync(() => {
    const username = 'nikk';
    const password = 'Nik123';

    const expectedResponse = {"name":" nikita","username":"nikk","email":"nik@gmail.com","password":"Nik123","id":1,"role":"admin"};

    service.authenticate(username, password).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`http://localhost:1123/authenticate/${username}/${password}`);
    expect(req.request.method).toBe('GET');

    req.flush(expectedResponse);

    tick();
  }));

  it('should handle failed login', fakeAsync(() => {
    const username = 'invalidUser';
    const password = 'invalidPassword';
  
    const expectedResponse = {"name":null,"username":null,"email":null,"password":null,"id":0,"role":null};
  
    service.authenticate(username, password).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
  
    const req = httpMock.expectOne(`http://localhost:1123/authenticate/${username}/${password}`);
    expect(req.request.method).toBe('GET');
  
    req.flush(expectedResponse);
  
    tick();
  }));

  it('should add new user', fakeAsync(() => {
    const user={
          
          name: 'Parikshit',
          email: 'pari.12@gmail.com',
          role: 'USER',
          username: 'paripari',
          password: 'Pari@123'
        };
  
    const expectedResponse = user;

    service.register(user).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
  
    const req = httpMock.expectOne('http://localhost:1123/register');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(user);
  
    req.flush(expectedResponse);
  
    tick();
  }));
  
   
});


