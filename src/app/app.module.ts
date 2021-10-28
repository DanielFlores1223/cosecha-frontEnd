import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

//Paquetes
import {NgxPaginationModule} from 'ngx-pagination';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/vistaPrincipal/menu/menu.component';
import { InicioComponent } from './components/vistaPrincipal/inicio/inicio.component';
import { NosotrosComponent } from './components/vistaPrincipal/nosotros/nosotros.component';
import { RegistroComponent } from './components/vistaPrincipal/registro/registro.component';
import { InicioSesionComponent } from './components/vistaPrincipal/inicio-sesion/inicio-sesion.component';
import { PiePaginaComponent } from './components/vistaPrincipal/pie-pagina/pie-pagina.component';
import { MenuProveedorComponent } from './components/proveedor/menu-proveedor/menu-proveedor.component';
import { RespuestaBuscadorComponent } from './components/vistaPrincipal/respuesta-buscador/respuesta-buscador.component';
import { MenuAdministradorComponent } from './components/administrador/menu-administrador/menu-administrador.component';
import { DashboardAdministradorComponent } from './components/administrador/dashboard-administrador/dashboard-administrador.component';
import { ClientesReadComponent } from './components/administrador/clientes-crud/clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './components/administrador/clientes-crud/clientes-create/clientes-create.component';
import { ClientesUpdateComponent } from './components/administrador/clientes-crud/clientes-update/clientes-update.component';
import { DashboardProveedorComponent } from './components/proveedor/dashboard-proveedor/dashboard-proveedor.component';
import { CatalogoReadComponent } from './components/proveedor/mi-catalogo/catalogo-read/catalogo-read.component';
import { CatalogoCreateComponent } from './components/proveedor/mi-catalogo/catalogo-create/catalogo-create.component';
import { CatalogoUpdateComponent } from './components/proveedor/mi-catalogo/catalogo-update/catalogo-update.component';
import { ProductosComponent } from './components/vistaPrincipal/productos/productos.component';
import { ProveedoresComponent } from './components/vistaPrincipal/proveedores/proveedores.component';
import { ProveedorCatalogoComponent } from './components/vistaPrincipal/proveedor-catalogo/proveedor-catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    NosotrosComponent,
    RegistroComponent,
    InicioSesionComponent,
    PiePaginaComponent,
    MenuProveedorComponent,
    RespuestaBuscadorComponent,
    MenuAdministradorComponent,
    DashboardAdministradorComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    ClientesUpdateComponent,
    DashboardProveedorComponent,
    CatalogoReadComponent,
    CatalogoCreateComponent,
    CatalogoUpdateComponent,
    ProductosComponent,
    ProveedoresComponent,
    ProveedorCatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
