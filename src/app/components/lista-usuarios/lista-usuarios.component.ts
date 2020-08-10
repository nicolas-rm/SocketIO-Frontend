import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { WebsocketsService } from 'src/app/services/websockets.service';

@Component({
   selector: 'app-lista-usuarios',
   templateUrl: './lista-usuarios.component.html',
   styleUrls: ['./lista-usuarios.component.sass']
})
export class ListaUsuariosComponent implements OnInit {

   usuariosActivosObservable: Observable<any>;

   constructor(public chatServices: ChatService, private wsServices: WebsocketsService) {
      // this.wsServices.emit('obtener-usuarios');
   }

   ngOnInit(): void {
      this.usuariosActivosObservable = this.chatServices.getUsuariosActivos();
      this.chatServices.setObtenerUsuarios();
      // this.usuariosActivosObservable.subscribe((rs) => {
      // console.log('ESTA ENTRANDO: ', rs);
      // this.chatServices.getObtenerUsuarios();
      // });
      // console.log(this.usuariosActivosObservable.subscribe((rs) => {
      //    console.log(rs.id);
      // }));

      // this.chatServices.getObtenerUsuarios();


      // this.wsServices.emit('id-usuario', { id: localStorage.getItem(JSON.parse('')) });
   }

}
