import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInsurranceComponent } from './personal-insurrance.component';
import { PersonalInsurranceRoutingModule } from './personal-inssurance-routing.module';
import { BackOfficeModule } from 'src/app/back-office/back-office/back-office.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/layout/loading/loading/loading.module';

@NgModule({
  declarations: [PersonalInsurranceComponent],
  imports: [
    FormsModule,
    CommonModule,
    PersonalInsurranceRoutingModule,
    BackOfficeModule,
    LoadingModule
  ]
})
export class PersonalInsurranceModule { }
