import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// **Componentes**
// --VistaPrincipal--
import { InicioComponent } from './components/vistaPrincipal/inicio/inicio.component';
import { InicioSesionComponent } from './components/vistaPrincipal/inicio-sesion/inicio-sesion.component';
import { RespuestaBuscadorComponent } from './components/vistaPrincipal/respuesta-buscador/respuesta-buscador.component';
import { NosotrosComponent } from './components/vistaPrincipal/nosotros/nosotros.component';
import { ProductosComponent } from './components/vistaPrincipal/productos/productos.component';
import { ProveedoresComponent } from './components/vistaPrincipal/proveedores/proveedores.component';
import { ProveedorCatalogoComponent } from './components/vistaPrincipal/proveedor-catalogo/proveedor-catalogo.component';
import { RegistroComponent } from './components/vistaPrincipal/registro/registro.component';

// --Administrador--
import { DashboardAdministradorComponent } from './components/administrador/dashboard-administrador/dashboard-administrador.component';
import { ClientesReadComponent } from './components/administrador/clientes-crud/clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './components/administrador/clientes-crud/clientes-create/clientes-create.component';
import { ClientesUpdateComponent } from './components/administrador/clientes-crud/clientes-update/clientes-update.component';

// --Proveedor--
import { DashboardProveedorComponent } from './components/proveedor/dashboard-proveedor/dashboard-proveedor.component';
import { CatalogoReadComponent } from './components/proveedor/mi-catalogo/catalogo-read/catalogo-read.component';
import { CatalogoCreateComponent } from './components/proveedor/mi-catalogo/catalogo-create/catalogo-create.component';
import { CatalogoUpdateComponent } from './components/proveedor/mi-catalogo/catalogo-update/catalogo-update.component';

const routes: Routes = [
  // --Vista principal paths--
  { path: 'inicio', component: InicioComponent }, 
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'respuesta-buscador', component: RespuestaBuscadorComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'proveedores', component: ProveedoresComponent},
  { path: 'proveedor-catalogo/:id', component: ProveedorCatalogoComponent },
  { path: 'registro', component: RegistroComponent},

  // --administrador paths--
  { path:'dashboard-administrador', component: DashboardAdministradorComponent },
  { path: 'cliente-create', component: ClientesCreateComponent},
  { path: 'cliente-read', component: ClientesReadComponent },
  { path: 'cliente-update/:id', component: ClientesUpdateComponent },
  
  // --proveedor paths--
  { path: 'dashboard-proveedor', component: DashboardProveedorComponent },
  { path: 'catalogo-read', component: CatalogoReadComponent },
  { path: 'catalogo-create', component: CatalogoCreateComponent },
  { path: 'catalogo-update', component: CatalogoUpdateComponent },
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'**', redirectTo: 'inicio', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
