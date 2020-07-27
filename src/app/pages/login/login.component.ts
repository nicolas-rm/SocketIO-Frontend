import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from 'src/app/services/websockets.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   nombre: string = '';

   constructor(public wsServices: WebsocketsService) { }

   ngOnInit(): void {
   }


   ingresar() {
      // console.log(this.nombre)

      this.wsServices.loginws(this.nombre);
   }
}
