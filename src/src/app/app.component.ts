import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

// @ - decorator(decorator means providing information about class)
@Component({     //Providing information about App component class
  selector: 'app-root',   //Named given to this component
  templateUrl: './app.component.html',   //Html file
  styleUrls: ['./app.component.css']     //CSS file
})
export class AppComponent {
  //Component --> TS file --> which html and css file associated
  title = 'MyProject';

  //Binding
  //Oneway
  strName = "My name is Nikhil"
  //Twoway
  myData : string = "Nikhil Dethe"

  //Property binding
  imageUrl = "./assets/nature.jfif"

  //Event binding
  clickedButton(){
    alert("You clicked button...")
  }

  //Directives
  //Attribute - ngClass
  bCustomer : boolean = true;
  chtoCustomer(){
    this.bCustomer = true;
  }
  chtoEmployee(){
    this.bCustomer = false;
  }

  //Attribute - ngStyle
  strColor = "red";
  strFontSize = "10";

  //Structural - ngFor
  userList = [
    {uid : 101, name : "Nikhil", location : "Pune"},
    {uid : 102, name : "Abhi Dethe", location : "Mumbai"},
    {uid : 103, name : "Sahil", location : "Delhi"},
    {uid : 104, name : "Ganesh", location : "Nashik"},
    {uid : 105, name : "Rakesh Verma", location : "Nagar"}
  ];

  //Structural - ngIf
  bLogin = true;
  bRegister = false;
  displayLogin(){
    this.bLogin = true;
    this.bRegister = false;
  }
  displayRegistraton(){
    this.bLogin = false;
    this.bRegister = true;
  }

  //Structural - ngSwitch
  nData = 1;

  //Pipes - output of one gives to input for another
  strPipe = "My name is Nikhil Dethe";
  ndate = new Date();
  
    //Case and Slice pipe
    trText: string = 'This is strText';

    // Currency and Date-Time
    objDate: Date = new Date();
    objNum: number = 100;
  
    // JSON pipe
    objJSON = { "id": 10, "name": "Nikhil Dethe", "branch": "Computer" };
  
    //Async pipe
    time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });

  //Custom pipe
  cel = 1;
  fare = 1;

  //Routing


}
