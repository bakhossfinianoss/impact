import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInsurranceComponent } from './personal-insurrance.component';

const routes: Routes = [{ path: '', component: PersonalInsurranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInsurranceRoutingModule { }
