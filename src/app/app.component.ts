import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { WebsocketsService } from './services/websockets.service';
// import { WebsocketsService } from './services/websockets.service';
// import { ChatService } from './services/chat.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
   title = 'SocketIO-Frontend';


   constructor(private wsServices: WebsocketsService, private chatServices: ChatService) {
   }

   ngOnInit() {
      this.chatServices.getMessagesPrivate().subscribe((mensaje) => {
         console.log('Mensaje Privado: ', mensaje);
      });
   }
}
