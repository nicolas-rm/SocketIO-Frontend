import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../../services/websockets.service';
import { Usuario } from '../../classes/usuario';

@Component({
   selector: 'app-mensajes',
   templateUrl: './mensajes.component.html',
   styleUrls: ['./mensajes.component.sass']
})
export class MensajesComponent implements OnInit {
   usuario: Usuario;
   constructor(public wsServices: WebsocketsService) {
      this.usuario = this.wsServices.usuario;

      console.log(this.usuario);
   }

   ngOnInit(): void {
   }


}
