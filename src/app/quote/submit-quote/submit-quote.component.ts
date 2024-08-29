import { Component, OnInit } from '@angular/core';
import { SubmitQuoteService } from '../submit-quote.service';
import { LanguageService } from 'src/app/layout/language/language.service';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {
  currentLanguage: string = 'en';

  constructor(private submitQuoteService : SubmitQuoteService,
    private languageService: LanguageService
  ){}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  onSubmit(form: any) {
    console.log(form)
    this.submitQuoteService.sendEmail(form.value)
      .subscribe( res => {
        console.log(res)
      },
      err => console.log(err)
    )

  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

}
