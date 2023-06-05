import { TestBed } from '@angular/core/testing';
import { EmployeeServiceService } from './employee-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule here
      providers: [EmployeeServiceService] // Add EmployeeService provider here
    });

    service = TestBed.inject(EmployeeServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
