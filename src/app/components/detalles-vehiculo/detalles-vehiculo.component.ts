import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.css']
})


export class DetallesVehiculoComponent implements OnInit {
  vehiculo: any;
  placa = "";
  mensaje = "";
  constructor(private vehiculosService: VehiculosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
     
    this.getVehiculo(this.route.snapshot.params["placa"]);
  }
  

  //--metodo para obtener la informacion del vehiculo
  getVehiculo(placa:string): void {
    this.vehiculosService.getOne(placa)
      .subscribe(
        data => {
          this.vehiculo = data.vehiculo;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
//---metodo para actualizar el vehiculo
  updateVehiculo(): void {
    console.log("entrando a actualizar vehiculo")
    this.vehiculosService.update( this.vehiculo)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje = 'El vehículo se actualizo correctamente!';
        },
        error => {
          console.log(error);
        });
  }
}
