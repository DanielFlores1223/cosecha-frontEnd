import { Component, OnInit } from '@angular/core';

//servicios
import { ClienteService } from '../../../../services/cliente.service';

//interface 
import { Cliente, ClienteCreate } from '../../../../interfaces/cliente';


@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  clienteInfo = ClienteCreate;
  file!: File;
  photoSelected!: string | ArrayBuffer | null; 

  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  createCliente() {
    this.clienteService.createCliente(this.clienteInfo).subscribe( async (res:any) => {
      console.log(res)

      if (res.error && res.error === 'email existente') {
        console.log('EMAIL EXISTENTE ERROR!')
      }
    },
    err => {
      console.log(err)
    });
  }

  /* onPhotoSelected(event: any): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //image preview
      const leer = new FileReader();
      leer.onload = e => this.photoSelected = leer.result;
      leer.readAsDataURL(this.file);
    }
} */

}
