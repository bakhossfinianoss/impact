import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject = new BehaviorSubject<string>(localStorage.getItem('language') || 'en');
  currentLanguage$ = this.languageSubject.asObservable();
  translations: any = {};
  lang = `${environment.baseHref}assets/lang/`;

  constructor(private http: HttpClient) {
    this.loadTranslations('en'); // Load default language
  }
  
  loadTranslations(language: string) {
    const url = `${this.lang}${language}.json`; 
    this.http.get(url).subscribe((translations: any) => {
      this.translations = translations;
    });
  }

  setLanguage(language: string) {
    localStorage.setItem('language', language);
    this.languageSubject.next(language);
    this.loadTranslations(language);
  }

  getLanguage(): string {
    return this.languageSubject.value;
  }

  getTranslation(key: string): string {
    return this.translations[key];
  }
}
