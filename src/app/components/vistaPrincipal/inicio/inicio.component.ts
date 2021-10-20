import { Component, OnInit } from '@angular/core';

//Servicios
import { ProveedorService } from '../../../services/proveedor.service';

//interface
import { Dominio } from '../../../interfaces/dominio';
import { Proveedor } from '../../../interfaces/proveedor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  URL = Dominio.url;
  productos = [];
  proveedores = [];
  resultadoFinal: Array<Proveedor> = [];
  buscador: String = '';

  constructor(private proveedorService : ProveedorService) { }

  ngOnInit(): void {

    this.getDataSearch();
    
  }

  getDataSearch() {

   this.proveedorService.obtencionDataSearch.subscribe(async data => {
      this.productos = await data.productos;
      this.proveedores = await data.proveedores;
      this.buscador = await data.busqueda;
     
      if (this.proveedores == undefined) {
        this.resultadoFinal = [...this.productos];
      }else{

        this.resultadoFinal = [...this.proveedores, ...this.productos];
      }
    });
 
    
  }

  

}
