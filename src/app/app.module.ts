import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageListarComponent } from './listador/listar/page-listar/page-listar.component';
import { SidebarPaisComponent } from './listador/shared/sidebar-pais/sidebar-pais.component';
import { PorMotoComponent } from './listador/listar/por-moto/por-moto.component';
import { PorPokemonComponent } from './listador/listar/por-pokemon/por-pokemon.component';
import { PorBancosComponent } from './listador/listar/por-bancos/por-bancos.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListarComponent,
    SidebarPaisComponent,
    PorMotoComponent,
    PorPokemonComponent,
    PorBancosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
