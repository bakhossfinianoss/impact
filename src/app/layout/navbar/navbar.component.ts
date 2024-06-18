import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedLanguage = 'English'; 
  menuOpen = false;
  private lastScrollTop = 0;

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
