import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollUpRemove]'
})
export class IntersectionObserverDirective implements OnInit {
  private lastScrollTop = 0;
  private scrollHandler: any;  // Store the bound function

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.scrollHandler = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollHandler);
  }

  private onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0 && scrollTop < this.lastScrollTop) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
    this.lastScrollTop = scrollTop;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}
