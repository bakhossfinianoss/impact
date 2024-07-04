import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:5000/api/auth'; // Your backend URL
  private token: string | null = null;
  private showComponentsSubject = new BehaviorSubject<boolean>(true);
  showComponent$ = this.showComponentsSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
     return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).subscribe();
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password });
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  logout() {
    localStorage.removeItem('token');
  }

  setShowComponent(show: boolean) {
    this.showComponentsSubject.next(show);
  }

}
