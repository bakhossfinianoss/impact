import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  //below to check it with ronald and eddy
  getAutoReplyMessage(message: string) {
    const lowerMessage = message.toLowerCase();

    if(lowerMessage.includes('hello')) {
      return 'Hi there! How can I assist you today?';
    } else if(lowerMessage.includes('price')) {
      return 'Our prices vary depending on the product, please send an email to info@impactco.ca and will get back to you as soon as possible.';
    } else if(lowerMessage.includes('hours')) {
      return 'We are open from 9 AM to 6 PM, Monday to Friday, for more information please call 1 (833) 361-1133.';
    } else {
      return 'I am sorry, I did not understand that. Can you please rephrase? or you can contact us by call 1 (833) 361-1133 or send us an email to info@impactco.ca';
    }
  }

}
