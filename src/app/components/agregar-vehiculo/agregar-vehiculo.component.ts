import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {
  vehiculo = {
    placa: '',
    marca: '',
    modelo: '',
    serie:'',
    color:''
  };
  mensaje= "";
  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
  }

  saveVehiculo(): void {
    const data = {
      placa: this.vehiculo.placa,
      marca: this.vehiculo.marca,
      modelo: this.vehiculo.modelo,
      serie: this.vehiculo.serie,
      color: this.vehiculo.color
    };
    this.vehiculosService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje="Vehículo registrado correctamente!"
        },
        error => {
          console.log(error);
        });
  }
}
