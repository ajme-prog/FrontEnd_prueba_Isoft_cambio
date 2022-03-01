import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarVehiculoComponent } from './components/agregar-vehiculo/agregar-vehiculo.component';
import { DetallesVehiculoComponent } from './components/detalles-vehiculo/detalles-vehiculo.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
const routes: Routes = [
  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: 'vehiculos', component: ListaVehiculosComponent },
  { path: 'vehiculos/:placa', component: DetallesVehiculoComponent },
  { path: 'agregar', component: AgregarVehiculoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }