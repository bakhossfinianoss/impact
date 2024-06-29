import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyContactInformationComponent } from './emergency-contact-information.component';


@NgModule({
  declarations: [EmergencyContactInformationComponent],
  imports: [
    CommonModule
  ],
  exports: [EmergencyContactInformationComponent]
})
export class EmergencyContactInformationModule { }
