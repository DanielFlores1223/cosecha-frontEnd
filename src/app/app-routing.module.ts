import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// **Componentes**
// --VistaPrincipal--
import { InicioComponent } from './components/vistaPrincipal/inicio/inicio.component';
//import {} from './components/vistaPrincipal/'

const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, 
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'**', redirectTo: 'inicio', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
