import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

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
