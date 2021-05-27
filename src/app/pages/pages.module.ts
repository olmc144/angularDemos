import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HomeComponent } from './home/home.component';
import { GeneroPipe } from '../pipes/genero.pipe';
import { AnteponerPipe } from '../pipes/anteponer.pipe';
import { FiltroUsuariosComponent } from './filtro-usuarios/filtro-usuarios.component';
import { FormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [
    InicioComponent, 
    ListaUsuariosComponent, 
    HomeComponent, 
    GeneroPipe, 
    AnteponerPipe, 
    FiltroUsuariosComponent, DetalleUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
