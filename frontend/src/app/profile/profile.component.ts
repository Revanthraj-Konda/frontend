import { Component, OnInit } from '@angular/core';
import { TokenStatus } from '../services/get-token-status';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName: string = "";
  token: string = "";

  constructor(private tokenStatus: TokenStatus) { }

  ngOnInit(): void {
    // this.getStatus('test');
    this.token = window.sessionStorage.getItem('token') || 'testToken';
    this.userName = window.sessionStorage.getItem('username') || 'test user';
  }
  getStatus(token: any) {
    console.log('token', token)
    // this.tkStatus= this.tokenStatus.getTokenStatus(token)
    this.tokenStatus.getTokenStatus(token).subscribe(data => {
      if (data !== undefined) {
        this.token = data.token;
      }
    }
    )
    // console.log(this.tkStatus)
    // .subscribe(data => console.log)
  }


}
