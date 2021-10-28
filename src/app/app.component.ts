import { Component } from '@angular/core';
//Interfaces
import { LoginRequest } from './interfaces/login';
//servicios
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cosecha';
  constructor( private loginService : LoginService) { }

  dataLogin: any;
  loginStatus: boolean = false;
  typeUser: string = '';

  ngOnInit(): void {
    this.getDataLogin();

    this.loginService.changeLogin.subscribe( isOpen => {
      this.loginStatus = Boolean(isOpen);
    });

    this.loginStatus = this.loginService.loginExito();
    this.typeUser = String(localStorage.getItem('typeUser'));
  }

  getDataLogin() {
    this.loginService.obtencionLoginInfo.subscribe(async res => {
       this.dataLogin = await res;
       localStorage.setItem('login', this.dataLogin.login);
       localStorage.setItem('typeUser', this.dataLogin.typeUser);
       this.loginStatus = this.loginService.loginExito();
       this.typeUser = String(localStorage.getItem('typeUser'));
    },
    err => {
      console.log(err)
    })
  }
}
