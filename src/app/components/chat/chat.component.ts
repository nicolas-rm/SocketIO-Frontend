import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-chat',
   templateUrl: './chat.component.html',
   styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
   // Texto Del Mensaje
   texto: string = '';

   // Evento Del Backend
   mensajeSubscription: Subscription;

   // Mensajes Recibidos - Todos
   mensajes: any[] = [];

   // Mover Al Ultimo Mensaje
   elemento: HTMLElement;

   constructor(public chatServices: ChatService) { }

   // Cuando Ya Se Cargo El Componente
   ngOnInit(): void {

      // Mover Al Ultimo
      this.elemento = document.getElementById('chat-mensajes');
      // Subscribe, Para Ejecutar
      // Destruir Subscribe Cuando Ya No Se Utilice El Servicio
      this.mensajeSubscription = this.chatServices.getMessages().subscribe((mensaje) => {
         console.log(mensaje);
         this.mensajes.push(mensaje);

         // Mover Al Ultimo
         setTimeout(() => {
            this.elemento.scrollTop = this.elemento.scrollHeight;
         }, 50);
      });
   }

   ngOnDestroy(): void {
      // Destruccion Cuando Se Deja El Componente
      this.mensajeSubscription.unsubscribe();
   }

   enviar() {

      if (this.texto.trim().length === 0) {
         return;
      }
      // console.log(this.texto);
      this.chatServices.sendMessage(this.texto);
      this.texto = '';

   }

}
