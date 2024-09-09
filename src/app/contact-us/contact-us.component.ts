import { Component } from '@angular/core';
import { LanguageService } from '../layout/language/language.service';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  currentLanguage: string = 'en';

  constructor(private languageService: LanguageService,
                private contactUsService: ContactUsService
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
    if (form.valid) {
      const { email, subject, message } = form.value;

      this.contactUsService.sendEmail(email, subject, message).subscribe(
        response => {
          console.log('Email sent successfully', response);
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

}
