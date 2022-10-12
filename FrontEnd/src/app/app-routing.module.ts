import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoComponent } from './components/auto/auto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HistorialComponent } from './components/historial/historial.component';

const routes: Routes = [
  { path: '', component: ClienteComponent},
  { path: 'autos', component: AutoComponent},
  { path: 'clientes', component: ClienteComponent},
  { path: 'historial', component: HistorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
