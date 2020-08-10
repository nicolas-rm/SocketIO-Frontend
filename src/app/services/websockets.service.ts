import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
   providedIn: 'root'
})
export class WebsocketsService {

   public socketStatus = false;
   public usuario: Usuario = null;
   constructor(private socket: Socket) {
      this.cargarStorage();
      this.checkstatus();
   }


   // Metodo Par Checar El Estado Del Servidor
   // Observables
   checkstatus() {
      // Conectar Cliente
      this.socket.on('connect', () => {
         console.log('Conectado Al Servidor: ', 'sockets');
         this.socketStatus = true;
         this.cargarStorage();
      });

      // Desconectar Cliente
      this.socket.on('disconnect', () => {
         console.log('Desconectado Del Servidor: ', 'sockets');
         this.socketStatus = false;
      });
   }


   // Emicion De Todo Tipo De Eventos
   // Emitir Todos Los Eventos/Mensajes/Cambios Que Emitan Los Clientes
   emit(evento: string, payload?: any, callback?: Function) {

      console.log('Emitiendo Evento ', evento);
      this.socket.emit(evento, payload, callback);
   }

   // Escuchar Todo Tipo De Eventos
   // Escuchar Todos Los Eventos/Mensajes/Cambios Que Emita El Servidor
   listen(evento: string) {
      // Regresa Cualquier Cosa Que El Servidor Emita
      return this.socket.fromEvent(evento);
   }

   // Configurar Nombre Del Usuario
   loginws(nombre: string) {

      return new Promise((resolve, reject) => {
         console.log('Configurando Socket: ', nombre);
         this.emit('configurar-usuario', { nombre }, (resp: any) => {
            console.log(resp);

            this.usuario = new Usuario(nombre);
            this.guardarStorage();
            resolve();
         });
      });
   }

   getUsuario() {
      return this.usuario;
   }

   guardarStorage() {
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
   }

   cargarStorage() {
      if (localStorage.getItem('usuario')) {
         this.usuario = JSON.parse(localStorage.getItem('usuario'));
         this.loginws(this.usuario.nombre);
         console.log(this.usuario);
      }
   }
}
