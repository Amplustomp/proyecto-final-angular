import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoTablaComponent } from './componentes/moto-tabla/moto-tabla.component';
import { BancoInputComponent } from './componentes/banco-input/banco-input.component';
import { PageListarComponent } from './page-listar/page-listar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingListarModule } from 'src/app/listar.routing';



@NgModule({
  declarations: [
    MotoTablaComponent,
    BancoInputComponent,
    PageListarComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingListarModule
  ],
  exports: [
    PageListarComponent
  ]
})
export class ListarModule { }
