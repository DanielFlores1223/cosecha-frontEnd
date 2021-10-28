import { Component, OnInit } from '@angular/core';

//Servicios
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  buscador: String = '';

  constructor(private proveedorService : ProveedorService) { }

  ngOnInit(): void {
    this.getDataSearch();
  }

  getDataSearch() {
   this.proveedorService.obtencionDataSearch.subscribe(async data => {
      this.buscador = await data.busqueda;
    });
  }

  

}
