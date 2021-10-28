import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-menu-proveedor',
  templateUrl: './menu-proveedor.component.html',
  styleUrls: ['./menu-proveedor.component.css']
})
export class MenuProveedorComponent implements OnInit {

  constructor(private ruta: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.removeItem('login');
    localStorage.removeItem('typeUser');

   this.loginService.loginExito()

    this.ruta.navigate(['/inicio'])
    
  }
}
