import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restaurante';

  constructor(private scriptService: ScriptService, private router: Router) { }

  ngOnInit() {
  /*  this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 10);
    });*/

    this.scriptService.loadExternalScript('./assets/js/main.js').then(() => { }).catch(() => { });

  }



}
