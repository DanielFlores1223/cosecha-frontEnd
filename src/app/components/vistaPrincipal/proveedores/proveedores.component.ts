import { Component, OnInit } from '@angular/core';

//Servicios
import { ProveedorService } from '../../../services/proveedor.service';
//interface
import { Dominio } from '../../../interfaces/dominio';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  resultadoFinal: any;
  URL = Dominio.url;
  prueba = false;
  paginacion = 1;

  constructor( private proveedorService: ProveedorService ) { }

  ngOnInit(): void {
    this.getProveedores();
    this.getDataSearch();
  }

  getProveedores() {
    this.proveedorService.getProveedores().subscribe( async res => {
      this.resultadoFinal = await res;
      console.log(this.resultadoFinal);
    },
    err => {
      console.log(err);
    })
  }

  getDataSearch() {
    this.proveedorService.obtencionDataSearch.subscribe( async data => {
       
        if (data.busqueda != '') {
          this.prueba = true;
        }else{
          this.prueba = false;
        }
     });
   }

}
