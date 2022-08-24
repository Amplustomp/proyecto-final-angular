import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorBancosComponent } from './listador/listar/por-bancos/por-bancos.component';
import { PorMotoComponent } from './listador/listar/por-moto/por-moto.component';
import { PorPokemonComponent } from './listador/listar/por-pokemon/por-pokemon.component';

const misRoutesHijas:Routes=[ 
          { path:'',
            children:[
              {path:'listar-moto'     , component:PorMotoComponent},
              {path:'listar-bancos'   , component:PorBancosComponent},
              {path:'listar-pokemon'  , component:PorPokemonComponent},

                            ]
          }
];

@NgModule({
  imports:[RouterModule.forRoot(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppRoutingListarModule { }