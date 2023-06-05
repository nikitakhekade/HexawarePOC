import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styles: [
  ]
})
export class AuthenticateComponent {


  isAuthenticated = false;

  authenticationForm = new FormGroup({


    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });


  constructor(private employeeService: EmployeeServiceService,
     private route:ActivatedRoute,private router:Router) { }

  
  resetTheForm(): void {
    this.authenticationForm.reset();
    
  }
  handleAuthenticateSubmit(): void {
    console.log(this.authenticationForm.value)
    const username= this.authenticationForm.value.username
    
    const password= this.authenticationForm.value.password
    

    this.employeeService.authenticate(username,password).subscribe((res: any) => {
      console.log(res+"1")

      if (res && res.id) {
        
        console.log(res.id +"2")
        this.isAuthenticated = true;
        if(this.isAuthenticated==true){
          // res=this.route.snapshot.paramMap.getAll;
          console.log(res+"3")
          this.router.navigate(['/dashboard'])
          // ,{queryParams:res}
        }
        
  
      }
      else {
        
        alert("Incorrect username & password")
        this.isAuthenticated = false
      }
     
    }

    )
  }

}
