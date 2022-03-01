import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get("http://localhost:5000/GetVehiculos");
  }

  //---servicio para obtener la data de un solo vehiculo
  getOne(placa:string):  Observable<any> {
    return this.http.get("http://localhost:5000/GetVehiculoUnico/"+placa);
  }

  update(data:any): Observable<any> {
    return this.http.put("http://localhost:5000/ActualizarVehiculo", data);
  }

  delete(placa:string): Observable<any> {
    return this.http.delete("http://localhost:5000/EliminarVehiculo/"+placa);
  }

  create(data:any): Observable<any> {
    return this.http.post("http://localhost:5000/NuevoVehiculo", data);
  }
}
