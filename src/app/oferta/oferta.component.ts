import { Component, OnInit } from '@angular/core';
import { OfertaService } from './oferta.service';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  public ofertas: any[];

  constructor(private ofertaService: OfertaService, private scriptService: ScriptService) { }

  ngOnInit() {
    //this.scriptService.loadExternalScript('./assets/js/vendor/jquery-1.12.4.min.js').then(() => { }).catch(() => { });
    this.listarOfertas();
  }

  private listarOfertas() {
    this.ofertas = this.ofertaService.loadOferta();
  }

}
