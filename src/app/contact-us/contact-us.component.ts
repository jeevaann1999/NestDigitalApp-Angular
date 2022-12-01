import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name = ""
  designation = ""
  phoneNumber = ""
  email = ""
  subject = ""

  readValues = () => {

    let data: any = {
      "name": this.name,
      "designation": this.designation,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "subject": this.subject
    }
    console.log(data)
  }
}
