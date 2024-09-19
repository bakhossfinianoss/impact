import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../layout/loading/loading/loading.module';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    FormsModule,
    LoadingModule,
    EditorModule
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
