import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';
import { QuoteRoutingModule } from './quote-routing.module';
import { EmergencyContactInformationModule } from '../home-content/emergency-contact-information/emergency-contact-information.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingModule } from '../layout/loading/loading/loading.module';

@NgModule({
  declarations: [SubmitQuoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuoteRoutingModule,
    EmergencyContactInformationModule,
    MatSnackBarModule,
    LoadingModule
  ],
  exports: [SubmitQuoteComponent]
})
export class QuoteModule { }
