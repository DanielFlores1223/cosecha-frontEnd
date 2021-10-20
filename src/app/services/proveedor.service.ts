import {  EventEmitter ,Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Dominio } from '../interfaces/dominio';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  url = `${Dominio.url}/proveedor`

  @Output() obtencionDataSearch: EventEmitter<any>= new EventEmitter();

  constructor( private http: HttpClient ) { }

  searchProveedorProductos(busqueda: String) {
    return this.http.post<any>(`${this.url}/searchProvProd`, {busqueda});
  }

}
