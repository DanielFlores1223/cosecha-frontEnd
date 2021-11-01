import { Component, DoBootstrap, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';  
import { Modal } from 'bootstrap';

//servicios
import { ClienteService } from '../../../services/cliente.service';
import { ProveedorService } from '../../../services/proveedor.service';

//interface 
import { Cliente, ClienteCreate } from '../../../interfaces/cliente';
import { ProveedorCreate } from '../../../interfaces/proveedor';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  tipoForm = '';
  clienteInfo = ClienteCreate;
  proveedorInfo = ProveedorCreate;
  file!: File;
  photoSelected!: string | ArrayBuffer | null; 

  constructor( private clienteService: ClienteService, private ruta : Router, private proveedorService: ProveedorService ) { }

  ngOnInit(): void {
  }

  desplegarForm( tipo:string ) {
    this.tipoForm = tipo;
  }

  async registrarUsuario() {

    if (this.tipoForm === 'cliente') {
      
      if (!this.validarCliente() || !this.validarTarjeta()) {
         return;
      }
      
      this.clienteService.createCliente(this.clienteInfo).subscribe( async (res:any) => {
  
        if (res.error && res.error === 'email existente') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo eléctronico ya está registrado',
            footer: ''
          });
        }else{

          this.limpiarCliente();

          //Registro completo
          await Swal.fire({
            icon: 'success',
            title: `Bienvenid@ ${res.nombreUsuario}`,
            text: '¡Se ha registrado correctamente!',
            showConfirmButton: true,
            timer: 2000
            
          });

          //Cierra el Modal
          $("#modalTarjeta").removeClass("in");
          $(".modal-backdrop").remove();
          $('body').removeClass('modal-open');
          $('body').css('padding-right', '');
          (<HTMLElement>document.querySelector('body')).style.overflow = 'visible';
          $("#modalTarjeta").hide();

          await this.ruta.navigate(['/inicio-sesion']);
        }
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error con el Servidor',
          footer: 'Intente la acción mas tarde',
          
        });
      });


    }else if(this.tipoForm === 'proveedor'){
      if (!this.validarProveedor() && !this.validarTarjeta()) {
        return;
      }

      this.proveedorService.createProveedor(this.proveedorInfo, this.file).subscribe(async (res:any) => {
        
        if (res.error && res.error === 'email existente') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo eléctronico ya está registrado',
            footer: ''
          });

        }else{
            this.limpiarProveedor();

            //Registro completo
            await Swal.fire({
              icon: 'success',
              title: `Bienvenid@ ${res.nombreUsuario}`,
              text: '¡Se ha registrado correctamente!',
              showConfirmButton: true,
              timer: 2000

            });

            //Cierra el Modal
            $("#modalTarjeta").removeClass("in");
            $(".modal-backdrop").remove();
            $('body').removeClass('modal-open');
            $('body').css('padding-right', '');
            (<HTMLElement>document.querySelector('body')).style.overflow = 'visible';
            $("#modalTarjeta").hide();

            await this.ruta.navigate(['/inicio-sesion']);
        }
      },
      err => {

      });

    }
  }

  onPhotoSelected(event: any): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //image preview
      const leer = new FileReader();
      leer.onload = e => this.photoSelected = leer.result;
      leer.readAsDataURL(this.file);
    }
  } 

  validarCliente() {
    if (this.clienteInfo.email != '' 
        && this.clienteInfo.nombreRestaurante != '' 
        && this.clienteInfo.nombreUsuario != '' 
        && this.clienteInfo.password != '' 
        && this.clienteInfo.telefono != '') {
      
          return true;
    }else{
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Hay campos vacios en el fomulario de registro!',
        footer: 'Verifique que todos los campos esten llenos.',
        
      });

      return false;
    }
  }

  validarProveedor() {
    const { domicilio, email, nombreEmpresa, nombreUsuario, password, rfc, telefono } = this.proveedorInfo;
    
    if( domicilio != '' 
        && email != '' 
        && nombreEmpresa != '' 
        && nombreUsuario != '' 
        && password != '' 
        && rfc != '' 
        && telefono != ''
        && this.file != undefined){
          //validamos que el tipo file sea una imagen
          const tipoImagen = this.file.type.split('/');
  
          if (tipoImagen[0] !== 'image') {
            //en caso de que sea diferente de image se muestra una alerta
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'El Formato de imagen que intentó subir no se permite.',
              text: 'Intente con una imagen en formato .png/.jpg',
              showConfirmButton: false,
              timer: 4000,
              timerProgressBar:true  
            });
            return false;

          }else{

            return true;
          }
    
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Hay campos vacios en el fomulario de registro!',
        footer: 'Verifique que todos los campos esten llenos.',
        
      });

      return false;
    }
  }

  validarTarjeta() {
    const inputNumero = (<HTMLInputElement>document.querySelector('#inputNumero')).value;
    const inputNombre = (<HTMLInputElement>document.querySelector('#inputNumero')).value;
    const selectMes = (<HTMLSelectElement>document.querySelector('#selectMes')).value;
    const selectYear = (<HTMLSelectElement>document.querySelector('#selectYear')).value;
    const inputCCV = (<HTMLInputElement>document.querySelector('#inputCCV')).value;

    if (inputNumero != '' && inputNombre != '' && selectMes != '' && selectYear != '' && inputCCV != '' ) {
      return true;
    
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Falta información para realizar la compra!',
        footer: 'Verifique que todos los campos de la tarjeta esten llenos.',
        
      });

      return false;
    }
  }

  limpiarCliente() {
     this.clienteInfo.nombreUsuario = '',
     this.clienteInfo.nombreRestaurante = '',
     this.clienteInfo.telefono = '',
     this.clienteInfo.email = '',
     this.clienteInfo.password = '',
     this.clienteInfo.publicidad = true,
     this.clienteInfo.img = ''
  }

  limpiarProveedor() {
    this.proveedorInfo.domicilio = '';
    this.proveedorInfo.email = '';
    this.proveedorInfo.nombreEmpresa = '';
    this.proveedorInfo.nombreUsuario = '';
    this.proveedorInfo.password = '';
    this.proveedorInfo.publicidad = false;
    this.proveedorInfo.telefono = '';
    this.proveedorInfo.rfc = '';
  }

  /* Funciones para tarjeta */
  mostrarFrente() {
    const tarjeta = document.querySelector('#tarjeta');

    if(tarjeta !== null){
      
      if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');

      }else {
        //Rotar tarjera
        tarjeta.classList.toggle('active');

      }
    }
  }

  mostrarSoloFrente() {
    const tarjeta = document.querySelector('#tarjeta');

    if(tarjeta !== null){
      
      if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');

      }
    }
  }

  escribirTarjeta(e:any) {
    const numeroTarjeta = document.querySelector('#tarjeta .numero');
    const formulario = document.querySelector('#formulario-tarjeta');
    const logoMarca = document.querySelector('#logo-marca');
    const inputNumero = (<HTMLInputElement>document.querySelector('#inputNumero'));
    let valorInput = e.target.value;

    if (inputNumero !== null) {
      inputNumero.value = valorInput
      // Eliminamos espacios en blanco
      .replace(/\s/g, '')
      // Eliminar las letras
      .replace(/\D/g, '')
      // Ponemos espacio cada cuatro numeros
      .replace(/([0-9]{4})/g, '$1 ')
      // Elimina el ultimo espaciado
      .trim();
    
      if (numeroTarjeta !== null) {
        numeroTarjeta.textContent = valorInput;

        if (logoMarca !== null) {
          if(valorInput == ''){
            numeroTarjeta.textContent = '#### #### #### ####';
        
            logoMarca.innerHTML = '';
          }
        
          /* if(valorInput[0] == 4){
            logoMarca.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = './assets/img/logos/visa.png';
            logoMarca.appendChild(imagen);
          } else if(valorInput[0] == 5){
            logoMarca.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = './assets/img/logos/mastercard.png';
            logoMarca.appendChild(imagen);
          } */
        
          // Volteamos la tarjeta para que el usuario vea el frente.
          this.mostrarSoloFrente();
        }
      }
      
    }

  }

  escribirNombre(e:any) {
    const inputNombre = (<HTMLInputElement>document.querySelector('#inputNombre'));
    const nombreTarjeta = document.querySelector('#tarjeta .nombre');
    const firma = document.querySelector('#tarjeta .firma p');
    let valorInput = e.target.value;

	inputNombre.value = valorInput.replace(/[0-9]/g, '');

  if (nombreTarjeta !== null) {
    nombreTarjeta.textContent = valorInput;

    if(firma !== null){
      firma.textContent = valorInput;

	    if(valorInput == ''){
	    	nombreTarjeta.textContent = '-';
	    }

    }
	
	    this.mostrarSoloFrente();
  }	
}

escribirMes(e:any) {
  const mesExpiracion = document.querySelector('#tarjeta .mes');
  
  if(mesExpiracion !== null){
    mesExpiracion.textContent = e.target.value;
    this.mostrarSoloFrente();
  } 
}

escribirYear(e:any){
  const yearExpiracion = document.querySelector('#tarjeta .year');
  
  if (yearExpiracion !== null) {
    yearExpiracion.textContent = e.target.value.slice(2);
	  this.mostrarSoloFrente();
  }  
}

escribirCCV(){
  const tarjeta = document.querySelector('#tarjeta');
  const inputCCV = (<HTMLInputElement>document.querySelector('#inputCCV'));
  const ccv = document.querySelector('#tarjeta .ccv');

  if(tarjeta !== null){
    if(!tarjeta.classList.contains('active')){
      tarjeta.classList.toggle('active');
    }
  
    inputCCV.value = inputCCV.value
    // Eliminar los espacios
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '');
  
    if (ccv !== null) {
      ccv.textContent = inputCCV.value;
    }
    
  }
  
}


}
