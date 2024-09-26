import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimPageComponent } from './claim-page.component';

const routes: Routes = [{ path: '', component: ClaimPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimPageRoutingModule { }
