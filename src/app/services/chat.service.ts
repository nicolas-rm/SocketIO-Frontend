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
         de: this.wsServices.usuario.nombre,
         cuerpo: mensaje
      };

      // Manda El Mensaje Al Socket
      this.wsServices.emit('mensaje', payload);
   }


   getMessages() {
      // Configuracion Del Listen.
      // Puede Ser Cualquier Cosa
      return this.wsServices.listen('mensaje-nuevo');
   }

   // Obtiene Los Mensajes Privados
   getMessagesPrivate() {
      return this.wsServices.listen('mensaje-privado');
   }

   // Obtiene Lista De Usuarios
   getUsuariosActivos() {
      return this.wsServices.listen('usuarios-activos');
   }

   getObtenerUsuarios() {
      return this.wsServices.listen('obtener-usuarios');
   }
   setObtenerUsuarios() {
      this.wsServices.emit('obtener-usuarios');
   }
}
