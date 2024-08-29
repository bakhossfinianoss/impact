import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.service';
import { LanguageService } from 'src/app/layout/language/language.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.css']
})
export class ChatConversationComponent implements OnInit{
  userMessage: string = '';
  currentLanguage: string = 'en';
  messages: { sender: string, text: string }[] = [];
  @Input() chatVisible: boolean = false;
  @Output() chatClosed = new EventEmitter<boolean>();

  constructor(private chatService: ChatService,
               private languageService: LanguageService
  ) { }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;
    });

  }

  sendMessage() {
    let reply;

    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'User', text: this.userMessage });

      if(this.currentLanguage === 'en') {
        reply = this.chatService.getAutoReplyMessageeEn(this.userMessage);
      } else {
        reply = this.chatService.getAutoReplyMessageFr(this.userMessage);
      }
      this.messages.push({ sender: 'Impact Insurrance', text: reply });
      this.userMessage = '';
    }
  }

  closeChat() {
    this.chatVisible = false;
    this.chatClosed.emit(false);
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

}
