import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgregarVehiculoComponent } from './components/agregar-vehiculo/agregar-vehiculo.component';
import { DetallesVehiculoComponent } from './components/detalles-vehiculo/detalles-vehiculo.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { AppRoutingModule } from '././app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AgregarVehiculoComponent,
    DetallesVehiculoComponent,
    ListaVehiculosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
