import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userObj: any = {
    username: "",
    password: "",
    message: ""
  }

  login() {
    console.log(this.userObj);
    if (this.userObj.username == "bhawna" && this.userObj.password == "gunwani") {
      this.userObj.message = "You are successfully loggedIn.";
    } else {
      this.userObj.message = "Login Failed.";
    }
  }

}
