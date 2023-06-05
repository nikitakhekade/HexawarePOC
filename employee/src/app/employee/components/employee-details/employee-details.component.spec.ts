// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EmployeeDetailsComponent } from './employee-details.component';
// import { ComponentFixture, TestBed, tick, fakeAsync,waitForAsync } from '@angular/core/testing';
// import { FormsModule, NgControl } from '@angular/forms';
// import { of } from 'rxjs';
// import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
// import { EmployeeServiceService } from '../../services/employee-service.service';
// import { CommonModule } from '@angular/common';
// import { RouterLinkActive } from '@angular/router';

// describe('EmployeeDetailsComponent', () => {
//   let component: EmployeeDetailsComponent;
//   let fixture: ComponentFixture<EmployeeDetailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//         imports: [FormsModule,CommonModule, HttpClientModule, RouterLinkActive],
//         declarations: [ EmployeeDetailsComponent ],
//         providers: [HttpClient, HttpHandler, FormsModule]

//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(EmployeeDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
//   it('should get employee details', waitForAsync(() => {
//     fixture = TestBed.createComponent(EmployeeDetailsComponent);
//     component = fixture.componentInstance;
//     let service = TestBed.inject(EmployeeServiceService);
//     const mockEmployeeList = [
//       { name: 'John Doe', email: 'john.doe@example.com', role: 'USER' },
//       { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'ADMIN' }
//     ];

//     // Create a spy on the employeeService and return the mock employee list
//     spyOn(service, 'getEmpoyeeDetails').and.returnValue(of(mockEmployeeList));

//     fixture.detectChanges();

//     fixture.whenStable().then(() => {
//       expect(component.employeeList).toEqual(mockEmployeeList);
//     });
//   }));
// });
