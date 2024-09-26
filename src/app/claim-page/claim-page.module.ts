import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimPageRoutingModule } from './claim-page-routing.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../layout/loading/loading/loading.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ClaimPageComponent } from './claim-page.component';
import { EmergencyContactInformationModule } from '../home-content/emergency-contact-information/emergency-contact-information.module';

@NgModule({
  declarations: [ClaimPageComponent],
  imports: [
    CommonModule,
    ClaimPageRoutingModule,
    FormsModule,
    LoadingModule,
    EditorModule,
    EmergencyContactInformationModule
  ],
  exports: [ClaimPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClaimPageModule { }
