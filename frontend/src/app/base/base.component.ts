import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStatus } from 'src/app/services/get-token-status';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private tokenStatus: TokenStatus, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['token']) {
        this.getStatus(params['token']);
      }

    })
  }

  tkStatus = { "token": "", "status": "", "errorCode": "", "errorDesc": "" };
  downloadLink: string = "";
  displayStatus = false;
  baseURL = "http://127.0.0.1:8000"

  getStatus(token: any) {
    console.log('token', token)
    // this.tkStatus= this.tokenStatus.getTokenStatus(token)
    this.tokenStatus.getTokenStatus(token).subscribe(data => {
      if (data !== undefined) {
        this.displayStatus = true
        this.tkStatus.token = data.token
        this.tkStatus.status = data.status;
        this.downloadLink = this.baseURL + data.results.output || "";
        if (data.status === 'ERROR') {
          this.tkStatus.errorCode = data.results.error_details.error_code;
          this.tkStatus.errorDesc = data.results.error_details.stdout;
        }
      }
      console.log(' this.displayStatus', this.displayStatus)
    }
    )
    // console.log(this.tkStatus)
    // .subscribe(data => console.log)
  }

}
