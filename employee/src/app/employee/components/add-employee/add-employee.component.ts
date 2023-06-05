import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { NgControl } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  isRegistered=false;
  result:any;
  
  employeeForm =new FormGroup({

    name : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  constructor(private employeeService:EmployeeServiceService){}

  handleRegisterSubmit():void{
    console.log(this.employeeForm.value)

    this.employeeService.register(this.employeeForm.value).subscribe((res : any)=>{
      console.log(res)
      
      if(res && res.id){
        console.log(res)
        console.log(res.id)
        this.isRegistered=true;
        this.result=res;
      }
      else{
        alert("Username already exists")
        
      }
    })
  }

}
