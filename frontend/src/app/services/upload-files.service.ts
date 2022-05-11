import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  private baseUrl = 'http://127.0.0.1:8000/api/upload';
  constructor(private http: HttpClient) { }

  upload(formData: FormData): Observable<any> {
    // Observable<Object>
    // const formData: FormData = new FormData();
    // formData.append('file', file);
    // const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });
    // return this.http.request(req);

    // const httpOptions = 
    // {
    //     headers: new HttpHeaders({'Content-Type':'application/json'}),
    // }

    const httpOptions = {
      headers: new HttpHeaders()
    }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // let token = {}
    return this.http.post(`${this.baseUrl}`, formData, httpOptions)
    // return token;
  }
}
