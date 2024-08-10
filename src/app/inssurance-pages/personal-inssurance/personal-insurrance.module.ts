import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInsurranceComponent } from './personal-insurrance.component';
import { PersonalInsurranceRoutingModule } from './personal-inssurance-routing.module';
import { BackOfficeModule } from 'src/app/back-office/back-office/back-office.module';

@NgModule({
  declarations: [PersonalInsurranceComponent],
  imports: [
    CommonModule,
    PersonalInsurranceRoutingModule,
    BackOfficeModule
  ]
})
export class PersonalInsurranceModule { }
