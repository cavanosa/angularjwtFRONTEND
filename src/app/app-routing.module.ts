import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { LoginComponent } from './auth/login.component';

import { GuardService as guard} from './guards/guard.service';
import { AdminComponent } from './users/admin.component';
import { UserComponent } from './users/user.component';
import { RegistroComponent } from './auth/registro.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},

  // productos: utilizamos canActivate
  {path: 'detalle/:id', component: DetalleProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path: 'nuevo', component: NuevoProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'editar/:id', component: EditarProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},

  // user y admin

  {path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'user', component: UserComponent, canActivate: [guard], data: {expectedRol: ['user']}},

  // rutas a login y registro
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
