import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollUpRemove]'
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {

  @Output() visibilityChange: EventEmitter<boolean> = new EventEmitter();
  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.visibilityChange.emit(entry.isIntersecting);  // Emit true if visible, false if not
      });
    });

    this.observer.observe(this.elementRef.nativeElement);  // Start observing the element
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();  // Clean up the observer when directive is destroyed
    }
  }
}
