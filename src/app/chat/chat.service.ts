import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  //below to check it with ronald and eddy
  getAutoReplyMessageeEn(message: string) {
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

  getAutoReplyMessageFr(message: string) {
    const lowerMessage = message.toLowerCase();

    if(lowerMessage.includes('bonjour')) {
      return 'Bonjour! Comment puis-je vous aider aujourd\'hui?';
    } else if(lowerMessage.includes('prix')) {
      return 'Nos prix varient en fonction du produit, veuillez envoyer un e-mail à info@impactco.ca et nous vous répondrons dès que possible.';
    } else if(lowerMessage.includes('horaires')) {
      return 'Nous sommes ouverts de 9h à 18h, du lundi au vendredi. Pour plus d\'informations, veuillez appeler le 1 (833) 361-1133.';
    } else {
      return 'Je suis désolé, je n\'ai pas compris cela. Pouvez-vous reformuler ? Ou vous pouvez nous contacter en appelant le 1 (833) 361-1133 ou en envoyant un e-mail à info@impactco.ca';
    }
}
 
}
