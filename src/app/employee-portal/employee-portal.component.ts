import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {
employeeid=""
password=""

constructor(private route:Router){}

readValues=()=>{
  let data:any={
    "employeeid":this.employeeid,
    "password":this.password
  }
  console.log(data)

  if (this.employeeid=="1122" && this.password=="12345") {
    this.route.navigate(['/addcourses'])
  } else {
    alert("Invalid credentials")
  }
}
}
