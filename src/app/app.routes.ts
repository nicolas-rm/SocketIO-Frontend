import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardGuard } from './guards/usuario-guard.guard';

const appRoutes: Routes = [
   { path: '', component: LoginComponent },
   // Ruta Protegida CanActivate: Señalando El Componente A Proteger
   { path: 'mensajes', component: MensajesComponent, canActivate: [UsuarioGuardGuard] },
   { path: '**', component: LoginComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
})

export class AppRoutesModule { }
