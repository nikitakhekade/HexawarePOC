import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient,private route:Router) {}

  register(formData :any){
    console.log(formData)

    return this.http.post('http://localhost:1123/register', formData).pipe(map((res:any)=>{
      console.log(res)

      return res;
    }));
  }
  
  
  authenticate( username:any, passowrd:any){
    
    console.log(username)
   
    
    return this.http.get('http://localhost:1123/authenticate/'+username+'/'+passowrd).pipe(map((res:any)=>{
      console.log(res)
      
      return res;
    }));
  }

  getEmpoyeeDetails(): any{
    console.log("service");
    return this.http.get('http://localhost:1123/users').pipe(map((res:any)=>{
      console.log(res)
      return res;
    }));
  }
}
