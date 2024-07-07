import { Component } from '@angular/core';

@Component({
  selector: 'app-business-inssurance',
  templateUrl: './business-inssurance.component.html',
  styleUrls: ['./business-inssurance.component.css']
})
export class BusinessInssuranceComponent {

  currentContent: string = 'businessOwnerPolicy';
  openAccordions: { [key: string]: boolean } = {};

  showContent(contentId: string) {
    this.currentContent = contentId;
  }

  toggleAccordion(accordionId: string) {
    this.openAccordions[accordionId] = !this.openAccordions[accordionId];
  }

  isOpen(accordionId: string): boolean {
    return this.openAccordions[accordionId];
  }

  isLoggedIn() {
    return true; //to change it later
  }
}
