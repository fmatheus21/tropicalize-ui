import { Component, OnInit } from '@angular/core';
import { EquipeService } from './equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  public equipes: any[];

  constructor(private equipeService: EquipeService) { }

  ngOnInit() {
    this.listarEquipe();
  }

  private listarEquipe() {
    this.equipes = this.equipeService.loadEquipe();
  }

}
