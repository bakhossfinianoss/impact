import { Component, EventEmitter, Output } from '@angular/core';
import { ChatConversationComponent } from '../chat-conversation/chat-conversation.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Output() chatStarted = new EventEmitter<boolean>();

  startChat() {
    this.chatStarted.emit(true);
  }

}
