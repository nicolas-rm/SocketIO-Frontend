import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from './services/websockets.service';
import { ChatService } from './services/chat.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
   title = 'SocketIO-Frontend';


   constructor(public wsServices: WebsocketsService, public chatServices: ChatService) {
   }

   ngOnInit() {
      console.log('Inicio Correctamente El Servicio');
      this.chatServices.sendMessage('Hola Desde Angular');
   }
}
