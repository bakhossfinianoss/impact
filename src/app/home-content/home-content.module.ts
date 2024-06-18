import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeContentComponent } from './home-content.component';
import { MatTableModule } from '@angular/material/table';
import { HomeContentRoutingModule } from './home-content-routing.module';
import { CommonModule } from '@angular/common';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [HomeContentComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTableModule,
    ChatModule,
    HomeContentRoutingModule
  ],
  exports: [HomeContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeContentModule { }