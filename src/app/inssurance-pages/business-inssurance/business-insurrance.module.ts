import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInsurranceRoutingModule } from './business-inssurance-routing.module';
import { BusinessInssuranceComponent } from './business-inssurance.component';
import { FormsModule } from '@angular/forms';
import { BackOfficeModule } from 'src/app/back-office/back-office/back-office.module';
import { LoadingModule } from 'src/app/layout/loading/loading/loading.module';


@NgModule({
  declarations: [BusinessInssuranceComponent],
  imports: [
    CommonModule,
    BusinessInsurranceRoutingModule,
    FormsModule,
    BackOfficeModule,
    LoadingModule
  ],
  exports: [BusinessInssuranceComponent]
})
export class BusinessInsurranceModule { }
