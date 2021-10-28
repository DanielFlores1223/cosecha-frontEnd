import { Component, OnInit } from '@angular/core';

//Servicios
import { ProveedorService } from '../../../services/proveedor.service';

//interface
import { Dominio } from '../../../interfaces/dominio';
import { Proveedor } from '../../../interfaces/proveedor';

@Component({
  selector: 'app-respuesta-buscador',
  templateUrl: './respuesta-buscador.component.html',
  styleUrls: ['./respuesta-buscador.component.css']
})
export class RespuestaBuscadorComponent implements OnInit {

  constructor( private proveedorService : ProveedorService ) { }
  
  resultadoFinal: Array<Proveedor> = [];
  URL = Dominio.url;
  paginacion = 1;
  informacionModal: any;
  
 ngOnInit(): void {
     this.getDataSearch()
  }

 getDataSearch() {

    this.proveedorService.obtencionDataSearch.subscribe( data => { 
       if (data.proveedores == undefined) {
         this.resultadoFinal =  [...data.productos];
       }else{
          this.resultadoFinal = [...data.proveedores, ...data.productos];
       }
     });
     
   }

   searchProductoId(id:any) {

    this.proveedorService.searchProductoId(String(id)).subscribe( async(res) => {
      this.informacionModal = await res;
      console.log(this.informacionModal)
    },
    err => {
      console.log(err)
    })
  }

}


