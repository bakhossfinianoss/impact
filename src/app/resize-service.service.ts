import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    // Listen to window resize events
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(200), // Debounce to avoid triggering too often
        startWith(this.getScreenSize()) // Emit the current screen size on initialization
      )
      .subscribe(() => this.checkScreenSize());
  }

  // Method to check the current screen size
  private checkScreenSize() {
    const isMobile = window.innerWidth <= 1030;  // Change breakpoint as needed
    this.isMobileSubject.next(isMobile);
  }

  // Get the initial screen size
  private getScreenSize() {
    return window.innerWidth <= 1030;
  }
}
