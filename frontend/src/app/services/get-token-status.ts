import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStatus {
  private baseUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  // getTokenStatus(token: any): any {
  getTokenStatus(token: any): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append('file', file);
    return this.http.get('http://127.0.0.1:8000/api/status/' + token)
    //  --- uncomment  
    // return this.http.get('/assets/token.json'); ///--- comment
    // const req = new HttpRequest('GET', `${this.baseUrl}`+'/api/status'+token);
    // return {"token":"e4c20d21-0bb8-4100-8884-0b9b5e216c7b", "status":"SUCCESS" ,"results":"outputfiles_4d4df257-9785-45ce-807d-602bbeec2746.tar"} 
  }
}
