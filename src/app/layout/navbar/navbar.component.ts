import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from 'src/app/back-office/login/login.service';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedLanguage = 'English';
  menuOpen = false;
  private lastScrollTop = 0;
  showComponent = true;
  currentLanguage: string = 'en';

  constructor(private loginService: LoginService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.loginService.showComponent$.subscribe( res => {
      this.showComponent = res;
    })

    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;
    });
  }

  toggleLanguage() {
    this.selectedLanguage = this.selectedLanguage === 'English' ? 'Arabic' : 'English';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const quoteButton = document.getElementById('quoteButton');

    if (quoteButton) {
      quoteButton.classList.add('jumping');
      // Remove the jumping animation class after the animation duration
      setTimeout(() => {
        if (quoteButton) {
          quoteButton.classList.remove('jumping');
        }
      }, 600); // match the duration of the jump animation
    }

    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}

