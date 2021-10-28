import { Component, OnInit } from '@angular/core';
//Servicios
import { ProveedorService } from '../../../services/proveedor.service';
//interface
import { Dominio } from '../../../interfaces/dominio';
import { Proveedor } from '../../../interfaces/proveedor';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  busqueda: string = '';
  resultadoFinal: Array<Proveedor> = [];
  informacionModal: any;
  URL = Dominio.url;
  prueba = false;
  paginacion = 1;

  constructor( private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.searchOnlyProductos();
    this.getDataSearch();
  }

  searchOnlyProductos() {
    this.proveedorService.searchOnlyProductos(this.busqueda).subscribe(async res => {
      this.resultadoFinal = await res;
      console.log(res);

    },
    err => {
      console.log(err);
    })
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
