import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from '../layout/language/language.service';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.css']
})
export class DynamicPopupComponent {
  currentLanguage: string = 'en';

  constructor(public dialogRef: MatDialogRef<DynamicPopupComponent>,
                 private languageService: LanguageService
  ){}
  
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
