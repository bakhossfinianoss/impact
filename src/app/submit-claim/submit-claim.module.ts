import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SubmitClaimComponent } from './submit-claim.component';

@NgModule({
  declarations: [SubmitClaimComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports:[SubmitClaimComponent]
})
export class SubmitClaimModule { }
