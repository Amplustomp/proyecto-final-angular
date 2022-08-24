import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoTablaComponent } from './componentes/moto-tabla/moto-tabla.component';
import { BancoInputComponent } from './componentes/banco-input/banco-input.component';



@NgModule({
  declarations: [
    MotoTablaComponent,
    BancoInputComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class ListarModule { }
