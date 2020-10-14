import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private sliderImage1: string;
  private sliderImage2: string;
  private sliderImage3: string;
  private sliderImage4: string;
  private sliderImage5: string;
  private sliderImage6: string;
  private sliderImage7: string;

  constructor() {
    this.loadImages();
  }

  private loadImages() {
    this.sliderImage1 = './assets/img/slider/slide_1.jpg';
    this.sliderImage2 = './assets/img/slider/cafe-manha.jpg';
    this.sliderImage3 = './assets/img/slider/almoco.jpg';
    this.sliderImage4 = './assets/img/slider/pizza.jpg';
    this.sliderImage5 = './assets/img/slider/aniversario.jpg';
    this.sliderImage6 = './assets/img/slider/futebol.jpg';
    this.sliderImage7 = './assets/img/slider/kids.jpg';
  }

 
  public getLoadSlider() {
    return [
      { id: 1, title: 'Bem Vindo a', subtitle: 'Tropicalize', image: this.sliderImage1 },
      { id: 2, title: 'Café da Manhã (7:30 ás 10:00)', subtitle: 'A partir de R$ 18,90', image: this.sliderImage2 },
      { id: 3, title: 'Almoço (11:30 as 15:00)', subtitle: 'A partir de R$ 17,90', image: this.sliderImage3 },
      { id: 4, title: 'Rodizio de Pizza (18:30 as 23:00)', subtitle: 'A partir de R$ 19,90', image: this.sliderImage4 },
      { id: 5, title: 'Comemore seu Aniversario Conosco!', subtitle: 'Reserve já...', image: this.sliderImage5 },
      { id: 6, title: 'Dia de jogos é aqui!', subtitle: 'Venha e traga aquele amigo', image: this.sliderImage6 },
      { id: 7, title: 'Sábado Kids', subtitle: '(teatro e brincadeiras) - (15:00 as 17:00)', image: this.sliderImage7 }
    ];
  }

}
