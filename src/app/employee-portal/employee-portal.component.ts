import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {
employeeid=""
password=""

readValues=()=>{
  let data:any={
    "employeeid":this.employeeid,
    "password":this.password
  }
  console.log(data)
}
}
