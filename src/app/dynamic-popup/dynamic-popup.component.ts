import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from '../layout/language/language.service';
import { DynamicPopupService } from './dynamic-popup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.css']
})
export class DynamicPopupComponent {
  currentLanguage: string = 'en';
  isLoading = false;

  constructor(public dialogRef: MatDialogRef<DynamicPopupComponent>,
                 private languageService: LanguageService,
                 private DynamicPopupService: DynamicPopupService,
                 private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }


  onSubmit(form: any) {
    if (form.valid) {
      this.isLoading = true;
      form.value.subject = form.value.subject ? form.value.subject : '';

      form.value.subject = 'Renewal';

      this.DynamicPopupService.sendEmail(form.value).subscribe(
        response => {
          console.log('Email sent successfully', response);
          this.isLoading = false;
          this.showToast();
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  showToast() {
    this.snackBar.open('Email sent successfully!', 'Close', {
      duration: 3000, // Duration in ms
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    });
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
