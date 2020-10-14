import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { OfertaComponent } from '../oferta/oferta.component';
import { CardapioComponent } from '../cardapio/cardapio.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { EquipeComponent } from '../equipe/equipe.component';


@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    OfertaComponent,
    CardapioComponent,
    GaleriaComponent,
    EquipeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
