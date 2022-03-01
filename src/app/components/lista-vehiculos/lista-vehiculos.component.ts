import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

  vehiculos: any =[];
  constructor(private vehiculosService: VehiculosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getVehiculos();
  }
  
  getVehiculos(): void {
    this.vehiculosService.getAll()
      .subscribe(
        data => {
          this.vehiculos = data.vehiculos;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteVehiculo(placa:string): void {
    console.log("la placa a eliminar es "+placa)
    this.vehiculosService.delete(placa)
      .subscribe(
        response => {
          console.log(response);
          
         window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
