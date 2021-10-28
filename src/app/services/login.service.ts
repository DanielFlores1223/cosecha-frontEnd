import {EventEmitter ,Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Dominio } from '../interfaces/dominio';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = `${Dominio.url}/login`

  @Output() obtencionLoginInfo: EventEmitter<any>= new EventEmitter();
  @Output() changeLogin: EventEmitter<Boolean> = new EventEmitter();

  constructor( private http: HttpClient ) { }

  login(objectLogin:any) {
    return this.http.post<any>(this.url, objectLogin);
  }
  
  loginExito(){
    this.changeLogin.emit(!!localStorage.getItem('login'));
    return !!localStorage.getItem('login');
  }
}
