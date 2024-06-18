import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [   
    ChatComponent,
    ChatConversationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChatComponent,
    ChatConversationComponent
  ]
})
export class ChatModule { }
