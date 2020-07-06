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
    this.socket.on('connect', () => {
      console.log('Conectado Al Servidor: ', 'sockets');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado Del Servidor: ', 'sockets');
      this.socketStatus = false;
    });
  }
}
