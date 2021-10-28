import { Component, OnInit } from '@angular/core';

//Servicios
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private proveedorService : ProveedorService) { }

  busqueda:String = '';

  ngOnInit(): void {
  }

  getSearch() {
   this.proveedorService.searchProveedorProductos(this.busqueda).subscribe( async (res) =>{
        
        this.proveedorService.obtencionDataSearch.emit({
          productos: await res.productos,
          proveedores: await res.proveedores,
          busqueda: this.busqueda
        });
    }, 
    err => {
      console.log(err);
    });
  
  }

  cambiarPagina() {
    this.busqueda = '';
  }
}
