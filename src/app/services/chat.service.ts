import { Injectable } from '@angular/core';
import { WebsocketsService } from './websockets.service';

@Injectable({
   providedIn: 'root'
})
export class ChatService {

   constructor(public wsServices: WebsocketsService) {
   }

   sendMessage(mensaje: string) {

      // Todo El Cuerpo De Lo Que Se Envia AL Socket
      const payload = {
         de: 'Nicolas RM',
         cuerpo: mensaje
      };

      // Manda El Mensaje Al Socket
      this.wsServices.emit('mensaje', payload);
   }
}
