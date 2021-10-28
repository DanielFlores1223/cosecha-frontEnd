import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

//servicios
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  constructor( private clienteService: ClienteService, private ruta : Router) { }

  clientes: any;

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
     this.clientes = this.clienteService.getClientes();
  }

  deleteCliente(id:string) {
    this.clienteService.deleteCliente(id).subscribe( async res =>{
       console.log('eliminado')
       this.getClientes();
    },
    err => {
      console.log(err)
    });
  }

  goToUpdatePage(id: string) {
    this.ruta.navigate(['cliente-update', id]);
  }

}
