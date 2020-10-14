import { Component, OnInit } from '@angular/core';
import { SobreService } from './sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  public informacoes: any[];

  constructor(private sobreService: SobreService) { }

  ngOnInit() {
    this.loadInformacoes();
  }

  private loadInformacoes() {
    this.informacoes = this.sobreService.getListarInformacoes();
  }

}
