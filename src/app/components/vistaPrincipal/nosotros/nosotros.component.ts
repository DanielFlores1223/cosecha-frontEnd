import { Component, OnInit } from '@angular/core';
//Servicios
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor( private proveedorService : ProveedorService) { }

  prueba = false;

  ngOnInit(): void {
    this.getDataSearch();
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
