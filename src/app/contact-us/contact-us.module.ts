import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingModule } from '../layout/loading/loading/loading.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule,
    MatSnackBarModule,
    LoadingModule
  ],
  exports:[ContactUsComponent]
})
export class ContactUsModule { }
