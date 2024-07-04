import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouteRoutingModule } from './login-route-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouteRoutingModule,
    FormsModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
