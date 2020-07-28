import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketsService } from 'src/app/services/websockets.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   nombre: string = '';

   constructor(public wsServices: WebsocketsService, private router: Router) { }

   ngOnInit(): void {
      // if (this.wsServices.usuario) {
      //    this.router.navigate(['/mensajes']);
      // }
   }


   ingresar() {
      // console.log(this.nombre)
      this.wsServices.loginws(this.nombre).then(() => {
         this.router.navigate(['/mensajes']);
      });
   }
}
