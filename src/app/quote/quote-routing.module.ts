import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';

const routes: Routes = [{ path: '', component: SubmitQuoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
