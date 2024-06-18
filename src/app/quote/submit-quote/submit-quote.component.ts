import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {

  ngOnInit(): void {}
  
  onSubmit() {
    alert('Form submitted!');
  }
  
}
