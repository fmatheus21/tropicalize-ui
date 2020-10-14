import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private image1: any;
  private image2: any;
  private image3: any;

  constructor() {
    this.image1 = './assets/img/promotions/buffet-cafe-manha.png';
    this.image2 = './assets/img/promotions/buffet-almoco.png';
    this.image3 = './assets/img/promotions/rodizio-pizza.png';
  }

  public loadOferta() {
    return [
      // tslint:disable-next-line: max-line-length
      //{ id: '1', title: 'Café da Manhã', description: 'Pães, Bolos, Minissalgados, Leite, Café, Achocolatado, Chá Diversos, Sucos da fruta (Caju, maracuja, laranja, limao), Frutas de epoca (banana, manga, laranja, abacaxi), Frios (queijo, presunto, mortadela).', image: this.image1 },
      { id: '1', title: 'Café da Manhã', description: 'Pães, Minissalgados, Bolos, Frutas de epoca, Sucos, Leite, Café, Chá, Frios, e muito mais.', image: this.image1 },
      // tslint:disable-next-line: max-line-length
      { id: '2', title: 'Buffet Livre de almoço', description: 'Saladas, Carnes, Frango, Itens nordestinos, Arroz, Feijão, Macarrão, Farrofa, Batata Frita, Salgadinhos, Sobremesa diversas.', image: this.image2 },
      // tslint:disable-next-line: max-line-length
      { id: '3', title: 'Rodízio de pizza com Buffet Livre', description: 'Pizza Diversos, Salgadinhos, Batata Frita, Macarrão, Lasanha, Empadão, Caldos e Sopas, Torradinhas, E muito mais.', image: this.image3 }
    ];
  }




}
