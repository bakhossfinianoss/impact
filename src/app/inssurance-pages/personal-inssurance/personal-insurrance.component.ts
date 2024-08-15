import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/layout/language/language.service';

@Component({
  selector: 'app-personal-insurrance',
  templateUrl: './personal-insurrance.component.html',
  styleUrls: ['./personal-insurrance.component.css']
})
export class PersonalInsurranceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private languageService: LanguageService
  ) {}
  currentLanguage: string = 'en';
  currentContent: string = 'CAR';
  selected: string = '';
  openAccordions: { [key: string]: boolean } = {};
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const tag = params.get('tag');
        if(tag) {
          this.showContent(tag);
        }
    });

    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
  
  showContent(contentId: string) {
    this.selected = contentId;
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
