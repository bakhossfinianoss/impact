import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/back-office/login/login.service';
import { LanguageService } from '../language/language.service';
import { IntersectionObserverService } from 'src/app/intersection-observer.service';
import { ResizeService } from 'src/app/resize-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedLanguage = 'English';
  menuOpen = false;
  showComponent = true;
  currentLanguage: string = 'en';
  isElementVisible = true;
  isMobile: boolean = false;

  constructor(private loginService: LoginService,
    private languageService: LanguageService,
    private intersectionObserverService: IntersectionObserverService
  ) {}

  ngOnInit(): void {
    this.loginService.showComponent$.subscribe( res => {
      this.showComponent = res;
    })

    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;
    });

    this.intersectionObserverService.visibilityChange$.subscribe((isVisible: boolean) => {
      this.isElementVisible = isVisible;
      if (!isVisible) {
        console.log('Element in ComponentB is not visible');
      }
    });
  }

  toggleLanguage() {
    this.selectedLanguage = this.selectedLanguage === 'English' ? 'Arabic' : 'English';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  isLoggedIn(): boolean {
    const token = this.loginService.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loginService.logout();
  }
}

