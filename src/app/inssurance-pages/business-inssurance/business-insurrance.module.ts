import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInsurranceRoutingModule } from './business-inssurance-routing.module';
import { BusinessInssuranceComponent } from './business-inssurance.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/layout/loading/loading/loading.module';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [BusinessInssuranceComponent],
  imports: [
    CommonModule,
    BusinessInsurranceRoutingModule,
    FormsModule,
    LoadingModule,
    EditorModule
  ],
  exports: [BusinessInssuranceComponent]
})
export class BusinessInsurranceModule { }
