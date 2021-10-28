import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

//Servicios
import { ProveedorService } from '../../../services/proveedor.service';
//interface
import { Dominio } from '../../../interfaces/dominio';

@Component({
  selector: 'app-proveedor-catalogo',
  templateUrl: './proveedor-catalogo.component.html',
  styleUrls: ['./proveedor-catalogo.component.css']
})
export class ProveedorCatalogoComponent implements OnInit {

  id = String(this.activateRoute.snapshot.paramMap.get("id"));
  proveedor: any;
  URL = Dominio.url;
  paginacion = 1;
  informacionModal: any;
  prueba = false;

  constructor(private activateRoute: ActivatedRoute, private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getDataProveedor();
    this.getDataSearch();
  }

  getDataProveedor() {
    this.proveedorService.getSingleProveedor(this.id).subscribe(async res => {
        this.proveedor = await res;
        console.log(this.proveedor);
    }, 
    err => {
      console.log(err);
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
