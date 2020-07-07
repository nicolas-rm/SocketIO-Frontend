import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-chat',
   templateUrl: './chat.component.html',
   styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
   texto: string = '';
   mensajeSubscription: Subscription;

   constructor(public chatServices: ChatService) { }

   // Cuando Ya Se Cargo El Componente
   ngOnInit(): void {
      // Subscribe, Para Ejecutar
      // Destruir Subscribe Cuando Ya No Se Utilice El Servicio
      this.mensajeSubscription = this.chatServices.getMessages().subscribe((mensaje) => {
         console.log(mensaje);
      });
   }

   ngOnDestroy(): void {
      // Destruccion Cuando Se Deja El Componente
      this.mensajeSubscription.unsubscribe();
   }

   enviar() {
      // console.log(this.texto);
      this.chatServices.sendMessage(this.texto);
      this.texto = '';

   }

}
