import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  private apiUrl = 'http://localhost:3000/sendmail'; // Update to your server URL

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
      return this.http.post(this.apiUrl, emailData);
  }

 
}
