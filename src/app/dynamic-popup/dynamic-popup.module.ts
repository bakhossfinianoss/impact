import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicPopupComponent } from './dynamic-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingModule } from '../layout/loading/loading/loading.module';


@NgModule({
  declarations: [DynamicPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    LoadingModule
  ],
  exports:[DynamicPopupComponent]
})
export class DynamicPopupModule { }
