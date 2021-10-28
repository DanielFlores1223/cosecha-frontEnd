import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
//Interfaces
import { LoginPost } from '../../../interfaces/login';

//Servicios 
import { LoginService } from '../../../services/login.service';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  infoForm: LoginPost = {
    email: '',
    password: ''
  };

  respuesta: any;

  constructor( private loginService : LoginService, private proveedorService : ProveedorService, private ruta : Router ) { }

  prueba = false;
  
  ngOnInit(): void {
    this.getDataSearch();
  }

  iniciarSesion(){

    this.loginService.login(this.infoForm).subscribe( async res => {
      this.respuesta = await res;

      if (!this.respuesta.login) {
        //se coloca alerta de error
        console.log('Datos incorrectos')
      }else{
         this.loginService.obtencionLoginInfo.emit(this.respuesta);
      
        switch(this.respuesta.typeUser) {
          case 'cliente': 
              console.log('cliente')
          break;
          case 'proveedor': 
              this.ruta.navigate(['/dashboard-proveedor']);
          break;
          case 'administrador': 
              this.ruta.navigate(['/dashboard-administrador']);
          break;
        }
      
      }
    },
    err =>{
      console.log(err);
    });
  
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
