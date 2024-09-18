import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/layout/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
