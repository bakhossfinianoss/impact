import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeContentComponent } from './home-content.component';
import { MatTableModule } from '@angular/material/table';
import { HomeContentRoutingModule } from './home-content-routing.module';
import { CommonModule } from '@angular/common';
import { EmergencyContactInformationComponent } from './emergency-contact-information/emergency-contact-information.component';
import { EmergencyContactInformationModule } from './emergency-contact-information/emergency-contact-information.module';

@NgModule({
  declarations: [HomeContentComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTableModule,
    HomeContentRoutingModule,
    EmergencyContactInformationModule
  ],
  exports: [HomeContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeContentModule { }
