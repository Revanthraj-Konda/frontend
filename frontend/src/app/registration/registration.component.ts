import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName: string = "";
  password: string = "";
  email: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    window.sessionStorage.setItem("username", this.userName);
    window.sessionStorage.setItem("password", this.password);
    window.sessionStorage.setItem("email", this.email);
  }

}
