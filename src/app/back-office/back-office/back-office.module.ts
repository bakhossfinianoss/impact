import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';

@NgModule({
  declarations: [BackOfficeComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ],
  exports: [BackOfficeComponent]
})
export class BackOfficeModule { }
