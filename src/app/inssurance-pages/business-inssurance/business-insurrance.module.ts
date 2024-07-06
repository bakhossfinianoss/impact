import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInsurranceRoutingModule } from './business-inssurance-routing.module';
import { BusinessInssuranceComponent } from './business-inssurance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BusinessInssuranceComponent],
  imports: [
    CommonModule,
    BusinessInsurranceRoutingModule,
    FormsModule
  ],
  exports: [BusinessInssuranceComponent]
})
export class BusinessInsurranceModule { }
