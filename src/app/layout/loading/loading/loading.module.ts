import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeModule } from 'src/app/back-office/back-office/back-office.module';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/layout/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    FormsModule,
    CommonModule,
    BackOfficeModule,
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
