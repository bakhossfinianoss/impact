import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupErrorMessageComponent } from '../popup-error-message/popup-error-message.component';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router, private dialog: MatDialog) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status === 200 && event.body && event.body.token) {
              this.router.navigate(['/home']);
            }
          }
        },
        (error: HttpErrorResponse) => {
          console.error('HTTP error:', error);

          if (error.status === 401) {
            // Unauthorized error, log out the user and navigate to login
            this.loginService.logout();
            this.router.navigate(['/login-dashboard']);
          } else if (error.status === 429) {
            // Too Many Requests, show a specific error popup
            this.dialog.open(PopupErrorMessageComponent, {
              data: {
                message: 'Too many requests. Please wait and try again later.',
              }
            });
            this.router.navigate(['/home']);
          }
        }
      )
    );
  }

}
