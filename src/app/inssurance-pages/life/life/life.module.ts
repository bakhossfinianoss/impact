import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LifeComponent } from '../life.component';
import { LifeInsurranceRoutingModule } from '../life-inssurance-routing.module';
import { LoadingModule } from 'src/app/layout/loading/loading/loading.module';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [LifeComponent],
  imports: [
    CommonModule,
    LifeInsurranceRoutingModule,
    FormsModule,
    LoadingModule,
    EditorModule
  ],
  exports: [LifeComponent]
})
export class LifeModule { }
