import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {

  @Input() text: string = '';
  editing: boolean = false;
  @ViewChild('textareaElement') textareaElement!: ElementRef;

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      // Dynamically set textarea dimensions
      setTimeout(() => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'pre-wrap';
        span.style.fontSize = getComputedStyle(this.textareaElement.nativeElement).fontSize;
        span.style.lineHeight = getComputedStyle(this.textareaElement.nativeElement).lineHeight;
        span.textContent = this.text;

        document.body.appendChild(span);
        const { width, height } = span.getBoundingClientRect();
        document.body.removeChild(span);

        const maxWidth = this.textareaElement.nativeElement.parentElement.clientWidth;
        this.textareaElement.nativeElement.style.width = `${Math.min(width + 10, maxWidth)}px`; // Add some padding, max width constraint
        this.textareaElement.nativeElement.style.height = `${height + 10}px`; // Set height to match span, with padding
        this.textareaElement.nativeElement.style.overflow = 'hidden';
        this.textareaElement.nativeElement.focus();
      });
    }
  }

  saveEdit(newText: any) {
    this.text = newText['target'].value;;
    this.toggleEdit();
  }


  ngAfterViewInit() {
    if (this.editing && this.textareaElement) {
      this.textareaElement.nativeElement.focus();
    }
  }
  isLoggedIn(): boolean {
    return true; //to change it later
  }

}
