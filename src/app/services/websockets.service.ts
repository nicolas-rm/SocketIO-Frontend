import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
   providedIn: 'root'
})
export class WebsocketsService {

   public socketStatus = false;

   constructor(private socket: Socket) {
      this.checkstatus();
   }


   // Observables
   checkstatus() {
      // Conectar Cliente
      this.socket.on('connect', () => {
         console.log('Conectado Al Servidor: ', 'sockets');
         this.socketStatus = true;
      });

      // Desconectar Cliente
      this.socket.on('disconnect', () => {
         console.log('Desconectado Del Servidor: ', 'sockets');
         this.socketStatus = false;
      });
   }


   // Emitir Todos Los Eventos/Mensajes/Cambios Que Emitan Los Clientes
   emit(evento: string, payload?: any, callback?: Function) {

      console.log('Emitiendo Evento ', evento);
      this.socket.emit(evento, payload, callback);
   }

   // Escuchar Todos Los Eventos/Mensajes/Cambios Que Emita El Servidor
   listen(evento: string) {
      // Regresa Cualquier Cosa Que El Servidor Emita
      return this.socket.fromEvent(evento);
   }

}
