import { Component } from '@angular/core';
import { LanguageService } from '../layout/language/language.service';
import { ContactUsService } from './contact-us.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  currentLanguage: string = 'en';
  isLoading = false;
  img = `${environment.baseHref}assets/ImpactInsurance_Logo4-300x110.png`;

  constructor(private languageService: LanguageService,
                private contactUsService: ContactUsService,
                private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  onSubmit(form: any) {
    this.isLoading = true;
    form.value.subject = 'Contact us - ' + form.value.subject;
    this.contactUsService.sendEmail(form.value)
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

  showToast() {
    this.snackBar.open('Email sent successfully!', 'Close', {
      duration: 3000, // Duration in ms
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    });
  }
}
