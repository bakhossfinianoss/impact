import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from '../layout/language/language.service';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.css']
})
export class SubmitClaimComponent {
  currentLanguage: string = 'en';

  constructor(public dialogRef: MatDialogRef<SubmitClaimComponent>,
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
