import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MemberAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)
                 :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const hasAccess = this.loginService.getToken();
      if(hasAccess)
        {
          return true;
        } else {
          this.router.navigate(['/login-dashboard']);
          window.alert("You dont have access!!! Please connect to Administrator ");
          return false;
        }
  }

}
