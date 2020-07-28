import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketsService } from '../services/websockets.service';


@Injectable({
   providedIn: 'root'
})
export class LoginGuard implements CanActivate {
   constructor(public wsServices: WebsocketsService, private router: Router) {

   }

   canActivate(): boolean {

      if (this.wsServices.getUsuario()) {
         this.router.navigate(['/mensajes']);
         return true;
      } else {
         this.router.navigate(['/']);
         return false;
      }
   }
}
