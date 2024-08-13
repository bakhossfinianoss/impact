import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../layout/language/language.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  currentLanguage: string = 'en';

  constructor(private languageService: LanguageService) {}
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}
