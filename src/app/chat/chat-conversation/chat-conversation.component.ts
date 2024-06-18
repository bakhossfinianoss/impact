import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.css']
})
export class ChatConversationComponent implements OnInit{
  userMessage: string = '';
  messages: { sender: string, text: string }[] = [];
  @Input() chatVisible: boolean = false;
  @Output() chatClosed = new EventEmitter<boolean>();

  constructor(private chatService: ChatService) { }
  ngOnInit() {
      console.log('ChatConversationComponent')
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'User', text: this.userMessage });
      const reply = this.chatService.getAutoReplyMessage(this.userMessage);
      this.messages.push({ sender: 'Impact Insurrance', text: reply });
      this.userMessage = '';
    }
  }

  closeChat() {
    this.chatVisible = false;
    this.chatClosed.emit(false);
  }

}
