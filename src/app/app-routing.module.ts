import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DclientesComponent } from './dclientes/dclientes.component';
import { DcitasComponent } from './dcitas/dcitas.component';
import { DatencionesComponent } from './datenciones/datenciones.component';
import { AddClienteComponent } from './dclientes/add-cliente.component';

const routes: Routes = [
  { path: 'clientes', component: DclientesComponent },
  { path: 'citas', component: DcitasComponent },
  { path: 'atenciones', component: DatencionesComponent },
  { path: 'clientenuevo', component: AddClienteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
