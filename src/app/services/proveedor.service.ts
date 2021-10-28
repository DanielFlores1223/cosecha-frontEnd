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

  getProveedores() {
    return this.http.get(this.url);
  }

  getSingleProveedor(id:any) {
    return this.http.get(`${this.url}/${id}`);
  }

  searchProveedorProductos(busqueda: String) {
    return this.http.post<any>(`${this.url}/searchProvProd`, {busqueda});
  }

  searchOnlyProductos(busqueda: String) {
    return this.http.post<any>(`${this.url}/searchOnlyProductos`, {busqueda});
  }

  searchProductoId(id: String) {
    return this.http.post<any>(`${this.url}/searchProductoId`, {id});
  }

}
