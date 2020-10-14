import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public sliders: any[];

  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.listSliders();
  }

  private listSliders() {
    this.sliders = this.sliderService.getLoadSlider();
  }

}
