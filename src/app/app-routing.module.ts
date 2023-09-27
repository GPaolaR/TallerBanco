import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarUsuariosComponent } from './componets/consultar-usuarios/consultar-usuarios.component';
import { AgregarUsuariosComponent } from './componets/agregar-usuarios/agregar-usuarios.component';

const routes: Routes = [
  { path: 'consultar', component: ConsultarUsuariosComponent },
  { path: 'anadir', component: AgregarUsuariosComponent },
  //{ path: '', redirectTo: '/consultar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
