import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject = new BehaviorSubject<string>(localStorage.getItem('language') || 'en');
  currentLanguage$ = this.languageSubject.asObservable();
  translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations('en'); // Load default language
  }

  loadTranslations(language: string) {
    this.http.get(`/assets/lang/${language}.json`).subscribe((translations: any) => {
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
