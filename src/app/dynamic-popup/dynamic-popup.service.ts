import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicPopupService {
  private apiUrl = 'http://localhost:5000/api/renewal-send-email'; // Your backend URL

  constructor(private http : HttpClient) { }

  sendEmail(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

}
