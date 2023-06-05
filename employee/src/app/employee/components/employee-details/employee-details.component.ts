import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  employeeList:any
  
  constructor(private employeeService:EmployeeServiceService){}

  ngOnInit():void{

    this.employeeService.getEmpoyeeDetails().subscribe((res:any)=>{
      console.log(res)
      this.employeeList=res;
    })
    console.log(this.employeeList); 
  }
  
}
