import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private apiUrl = 'http://localhost:5000/api'; // Your backend URL

  constructor(private http: HttpClient) { }

  getPersonalContent(language: string, category: string) {
    return this.http.get(`${this.apiUrl}/content/${language}/${category}`);
 }

 updatePersonalContent(language: string, category: string, subCategory: string, updatedContent: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/content`, {
    language,
    category,
    subCategory,
    ...updatedContent
  });
}
}
