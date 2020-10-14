import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private image1: any;
  private image2: any;
  private image3: any;
  private image4: any;
  private image5: any;

  constructor() {
    this.loadImages();
  }

  private loadImages() {
    this.image1 = './assets/img/team/team-1.jpg';
    this.image2 = './assets/img/team/team-2.jpg';
    this.image3 = './assets/img/team/team-3.jpg';
    this.image4 = './assets/img/team/team-4.jpg';
    this.image5 = './assets/img/team/team-5.jpg';
  }

  public loadEquipe() {
    return [
      // tslint:disable-next-line: max-line-length
      { id: 1, nome: 'Roger Lima', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: this.image1, facebook: 'https://www.facebook.com/', twitter: 'https://www.twitter.com/', instagram: 'https://www.instagram.com/' },
      // tslint:disable-next-line: max-line-length
      { id: 2, nome: 'Amanda Nunes', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: this.image2, facebook: 'https://www.facebook.com/', twitter: 'https://www.twitter.com/', instagram: 'https://www.instagram.com/' },
      // tslint:disable-next-line: max-line-length
      { id: 3, nome: 'Pedro Gomes', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: this.image3, facebook: 'https://www.facebook.com/', twitter: 'https://www.twitter.com/', instagram: 'https://www.instagram.com/' },
      // tslint:disable-next-line: max-line-length
      { id: 4, nome: 'Milena Santana', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: this.image4, facebook: 'https://www.facebook.com/', twitter: 'https://www.twitter.com/', instagram: 'https://www.instagram.com/' },
      // tslint:disable-next-line: max-line-length
      { id: 5, nome: 'João Lira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: this.image5, facebook: 'https://www.facebook.com/', twitter: 'https://www.twitter.com/', instagram: 'https://www.instagram.com/' }
    ];
  }

}
