import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackOfficeModule } from 'src/app/back-office/back-office/back-office.module';
import { LifeComponent } from '../life.component';
import { LifeInsurranceRoutingModule } from '../life-inssurance-routing.module';
import { LoadingModule } from 'src/app/layout/loading/loading/loading.module';


@NgModule({
  declarations: [LifeComponent],
  imports: [
    CommonModule,
    LifeInsurranceRoutingModule,
    FormsModule,
    BackOfficeModule,
    LoadingModule
  ],
  exports: [LifeComponent]
})
export class LifeModule { }
