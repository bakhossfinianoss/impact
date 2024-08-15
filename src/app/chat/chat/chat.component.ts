import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatConversationComponent } from '../chat-conversation/chat-conversation.component';
import { LanguageService } from 'src/app/layout/language/language.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  constructor(private languageService: LanguageService) {}

  @Output() chatStarted = new EventEmitter<boolean>();

  startChat() {
    this.chatStarted.emit(true);
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
