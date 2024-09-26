import { Component } from '@angular/core';
import { LanguageService } from '../layout/language/language.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {

  constructor(private languageService: LanguageService) {}
  currentLanguage: string = 'en';

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}
