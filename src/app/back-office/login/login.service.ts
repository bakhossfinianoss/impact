import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private apiUrl = 'http://localhost:5000/api';
  private apiUrl = 'https://www.impactco.ca:5000/api';
  private token: string | null = null;
  private showComponentsSubject = new BehaviorSubject<boolean>(true);
  showComponent$ = this.showComponentsSubject.asObservable();

  constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
        tap((response) => {
          if (response && response.token) {
            this.setToken(response.token);
          }
        })
      );
    }

    logout(): void {
      this.clearToken();
      window.location.reload();
    }

    setToken(token: string): void {
      this.token = token;
      localStorage.setItem('token', token);
    }

    getToken(): string | null {
      if (!this.token) {
        this.token = localStorage.getItem('token');
      }
      return this.token;
    }

    clearToken(): void {
      this.token = null;
      localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
      const token = this.getToken();
      return !!token;
    }

    setShowComponent(show: boolean) {
      this.showComponentsSubject.next(show);
    }

}
