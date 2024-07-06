import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessInssuranceComponent } from './business-inssurance.component';

const routes: Routes = [{ path: '', component: BusinessInssuranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessInsurranceRoutingModule { }
