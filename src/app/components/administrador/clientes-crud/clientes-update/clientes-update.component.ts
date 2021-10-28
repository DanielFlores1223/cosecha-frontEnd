import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { ClienteService } from '../../../../services/cliente.service';
import { ClienteCreate } from '../../../../interfaces/cliente';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {
  id = String(this.activateRoute.snapshot.paramMap.get("id"));
  constructor(private activateRoute: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
   
    this.getClienteInfo(this.id);
  }

  clienteInfo = ClienteCreate;

  getClienteInfo(id: string) {
    this.clienteService.getClienteSingle(id).subscribe(async (res:any) => {
      this.clienteInfo = res;
    },
    err => {
      console.log(err);
    });
  }

  updateCliente() {

    this.clienteService.updateClienteSingle(this.id, this.clienteInfo).subscribe( async res => {
      console.log(res);
    },
    err => {
      console.log(err)
    });
  }

}
