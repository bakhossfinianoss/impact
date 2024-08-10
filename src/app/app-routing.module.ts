import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberAuthGuard } from './back-office/back-office.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home-content/home-content.module').then(m => m.HomeContentModule) },
  { path: 'quote', loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  // { path: 'business-insurance', loadChildren: () => import('./inssurance-pages/business-inssurance/business-insurrance.module').then(m => m.BusinessInsurranceModule)},
  { path: 'personal-insurance', loadChildren: () => import('./inssurance-pages/personal-inssurance/personal-insurrance.module').then(m => m.PersonalInsurranceModule)},
  { path: 'login-dashboard', loadChildren: () => import('./back-office/login/login.module').then(m => m.LoginModule)},
  { path: 'back-office', loadChildren: () => import('./back-office/back-office/back-office.module').then(m => m.BackOfficeModule)},
  // { path: 'back-office', loadChildren: () => import('./back-office/back-office/back-office.module').then(m => m.BackOfficeModule), canActivate:[MemberAuthGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
