import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = 'http://localhost:5000/api/send-email'; // Your backend URL

  constructor(private http : HttpClient) { }

  sendEmail(recipientEmail: string, subject: string, message: string): Observable<any> {
    const emailData = { recipientEmail, subject, message };
    return this.http.post(this.apiUrl, emailData);
  }

}
