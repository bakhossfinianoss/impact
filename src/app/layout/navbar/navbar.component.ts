import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from 'src/app/back-office/login/login.service';

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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.showComponent$.subscribe( res => {
      this.showComponent = res;
    })
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

}
