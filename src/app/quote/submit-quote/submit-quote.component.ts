import { Component, OnInit } from '@angular/core';
import { SubmitQuoteService } from '../submit-quote.service';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {

  constructor(private submitQuoteService : SubmitQuoteService){}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(form)
    this.submitQuoteService.sendEmail(form.value)
      .subscribe( res => {
        console.log(res)
      },
      err => console.log(err)
    )

  }

}
