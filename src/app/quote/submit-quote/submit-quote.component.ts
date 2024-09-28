import { Component, OnInit } from '@angular/core';
import { SubmitQuoteService } from '../submit-quote.service';
import { LanguageService } from 'src/app/layout/language/language.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {
  currentLanguage: string = 'en';
  isLoading = false;

  constructor(private submitQuoteService : SubmitQuoteService,
    private languageService: LanguageService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  onSubmit(form: any) {
    this.isLoading = true;
    form.value.subject = 'Quote - ' + form.value.subject;
    this.submitQuoteService.sendEmail(form.value)
      .subscribe(
        res => {
          console.log(res);
          this.isLoading = false;
          this.showToast();
          form.reset();
        },
        err => console.log(err)
      );
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  showToast() {
    this.snackBar.open('Email sent successfully!', 'Close', {
      duration: 3000, // Duration in ms
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    });
  }
}
