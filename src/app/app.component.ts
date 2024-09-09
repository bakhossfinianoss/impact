import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './back-office/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  chatVisible = false;
  setChatVisibleFromLogin = false;
  isLoading!: Observable<boolean>;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
      this.router.events.subscribe(
        event => {
          if (event instanceof NavigationEnd) {
              if(event.url === '/login-dashboard' || event.url.startsWith('/back-office')) {
                  this.loginService.setShowComponent(false);
                  this.chatVisible = false;
                  this.setChatVisibleFromLogin = false;
              }else {
                   this.loginService.setShowComponent(true);
                   this.setChatVisibleFromLogin = true;
              }
          }
        }
      )
  }

  onChatStarted() {
    this.chatVisible = true;
  }

  closeChat() {
    this.chatVisible = false;
  }

}
