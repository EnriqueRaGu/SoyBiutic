import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'citas/:nombre', loadChildren: './citas/citas.module#CitasPageModule' },
  { path: 'agendarcita/:nombre', loadChildren: './agendarcita/agendarcita.module#AgendarcitaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'editar-cita', loadChildren: './editar-cita/editar-cita.module#EditarCitaPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'trabajador', loadChildren: './trabajador/trabajador.module#TrabajadorPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'consultardia', loadChildren: './consultardia/consultardia.module#ConsultardiaPageModule' },
  { path: 'homeusuario', loadChildren: './usuarios/homeusuario/homeusuario.module#HomeusuarioPageModule' },
  { path: 'agendarcitausuario', loadChildren: './usuarios/agendarcitausuario/agendarcitausuario.module#AgendarcitausuarioPageModule' },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
