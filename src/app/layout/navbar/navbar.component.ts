import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/back-office/login/login.service';
import { LanguageService } from '../language/language.service';
import { IntersectionObserverService } from 'src/app/intersection-observer.service';
import { ResizeService } from 'src/app/resize-service.service';
import { environment } from 'src/environments/environment';

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
  smallLogoImg = `${environment.baseHref}assets/footer-logo.png`;
  isSubMenuOpen: boolean = false;

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

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    if (language === 'en') {
      this.currentLanguage = 'en';
    } else if (language === 'fr') {
      this.currentLanguage = 'fr';
    }
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

