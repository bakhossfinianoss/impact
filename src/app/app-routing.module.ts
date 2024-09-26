import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MemberAuthGuard } from './back-office/back-office.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home-content/home-content.module').then(m => m.HomeContentModule) },
  { path: 'quote', loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule) },
  { path: 'privacy-policy', loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
  { path: 'claim', loadChildren: () => import('./claim-page/claim-page.module').then(m => m.ClaimPageModule) },
  { path: 'life-insurance', loadChildren: () => import('./inssurance-pages/life/life/life.module').then(m => m.LifeModule)},
  { path: 'business-insurance', loadChildren: () => import('./inssurance-pages/business-inssurance/business-insurrance.module').then(m => m.BusinessInsurranceModule)},
  { path: 'personal-insurance', loadChildren: () => import('./inssurance-pages/personal-inssurance/personal-insurrance.module').then(m => m.PersonalInsurranceModule)},
  { path: 'login-dashboard', loadChildren: () => import('./back-office/login/login.module').then(m => m.LoginModule)},
  { path: 'back-office', loadChildren: () => import('./back-office/login/login.module').then(m => m.LoginModule), canActivate:[MemberAuthGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Restores scroll to top
  anchorScrolling: 'enabled' // Enables anchor links scrolling
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
