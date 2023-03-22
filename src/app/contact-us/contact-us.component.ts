import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  str:string=''
  str1:string=''
  str3:string=''
  str2:string=''


  clear(){
    this.str=''
    this.str1=''
    this.str2=''
    this.str3=''

    alert('Message Sent!!!!!  Thank You!!!!!')
  }
}
