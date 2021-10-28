import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Dominio } from '../interfaces/dominio';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = `${Dominio.url}/cliente`

  constructor( private http: HttpClient) { }

  getClientes() {
    return this.http.get(this.url);
  }

  createCliente(clienteInfo: Cliente) {
    return this.http.post(this.url, clienteInfo);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getClienteSingle(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }
  
  updateClienteSingle(id: string, clienteInfo: Cliente) {
    return this.http.put(`${this.url}/${id}`, clienteInfo);
  }
}
