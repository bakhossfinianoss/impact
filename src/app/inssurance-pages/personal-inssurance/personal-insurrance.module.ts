import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInsurranceComponent } from './personal-insurrance.component';
import { PersonalInsurranceRoutingModule } from './personal-inssurance-routing.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/layout/loading/loading/loading.module';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [PersonalInsurranceComponent],
  imports: [
    FormsModule,
    CommonModule,
    PersonalInsurranceRoutingModule,
    LoadingModule,
    EditorModule,
  ]
})
export class PersonalInsurranceModule { }
