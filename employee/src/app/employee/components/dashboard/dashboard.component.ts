import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private employeeService:EmployeeServiceService,
     private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    console.log( this.route.snapshot.data)
   
  }
}
