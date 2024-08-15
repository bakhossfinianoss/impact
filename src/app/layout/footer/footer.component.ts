import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/back-office/login/login.service';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showComponent = true;

  constructor(private loginService: LoginService,
                private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.loginService.showComponent$.subscribe( res => {
      this.showComponent = res;
    });

    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

}
