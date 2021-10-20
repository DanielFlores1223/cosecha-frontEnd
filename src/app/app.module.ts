import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/vistaPrincipal/menu/menu.component';
import { InicioComponent } from './components/vistaPrincipal/inicio/inicio.component';
import { NosotrosComponent } from './components/vistaPrincipal/nosotros/nosotros.component';
import { RegistroComponent } from './components/vistaPrincipal/registro/registro.component';
import { InicioSesionComponent } from './components/vistaPrincipal/inicio-sesion/inicio-sesion.component';
import { PiePaginaComponent } from './components/vistaPrincipal/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    NosotrosComponent,
    RegistroComponent,
    InicioSesionComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
