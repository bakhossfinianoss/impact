import { Component } from '@angular/core';
import { LanguageService } from '../layout/language/language.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  currentLanguage: string = 'en';

  constructor(private languageService: LanguageService) {}
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
