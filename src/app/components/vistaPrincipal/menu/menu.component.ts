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

  dataRequest: any;

  ngOnInit(): void {
  }

  async getSearch() {
    await this.proveedorService.searchProveedorProductos(this.busqueda).subscribe( async (res) =>{
        this.dataRequest = await res;

        await this.proveedorService.obtencionDataSearch.emit({
          productos: res.productos,
          proveedores: res.proveedores,
          busqueda: this.busqueda
        });
    }, 
    err => {
      console.log(err);
    });
  
  }
}
