import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
employeeid=""
firstName=""
lastName=""
houseNumber=""
houseName=""
streetName=""
pincode=""
district=""
state=""
country=""
mobileNumber=""
emailId=""
parentName=""
gender=""
highestDegree=""
yearOfExperience=""
dateOfJoining=""
username=""
password=""
confirmPassword=""

readValues=()=>{
  let data:any={
    "employeeid":this.employeeid,
    "firstName=":this.firstName,
    "lastName":this.lastName,
    "houseNumber":this.houseNumber,
    "houseName":this.houseName,
    "streetName":this.streetName,
    "pincode":this.pincode,
    "district":this.district,
    "state":this.state,
    "country":this.country,
    "mobileNumber":this.mobileNumber,
    "emailId":this.emailId,
    "parentName":this.parentName,
    "gender":this.gender,
    "highestDegree":this.highestDegree,
    "yearOfExperience":this.yearOfExperience,
    "dateOfJoining":this.dateOfJoining,
    "username":this.username,
    "password":this.password,
    "confirmPassword":this.confirmPassword

  }
  console.log(data)
  if (this.password==this.confirmPassword) {
    alert("Registered Successfully")
    console.log(data)
  } else {
    alert("Password and Confirm Password does not match")
  }
}
}
