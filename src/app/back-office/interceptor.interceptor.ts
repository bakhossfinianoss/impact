import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private login: LoginService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const addToken = this.login.getToken();

    if (addToken) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${addToken}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              if(event.status === 200 && event.body && event.body.token) {
                  this.login.setToken(event.body.token);
                  this.router.navigate(['/back-office'])
                  return 'Success!';
              }
          }

          return;
        },
        (error) => {
          console.error('Error in HTTP request', error);
        }
      )
    );
  }

}
