 import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { EmployeeServiceService } from '../../services/employee-service.service';

import { AddEmployeeComponent } from './add-employee.component';
import { RouterLinkActive } from '@angular/router';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        HttpClientModule,
        ReactiveFormsModule
       
      ],
      declarations: [ AddEmployeeComponent ],
      providers:[
        EmployeeServiceService,
        HttpClient,
         HttpHandler,
         RouterLinkActive
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
