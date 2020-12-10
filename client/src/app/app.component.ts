import { Component } from '@angular/core';
import { ThemesService } from './services/theme.service';
import {any} from "codelyzer/util/function";
import {MuseeeService} from "./services/museee.service";
import {ExpositionService} from "./services/exposition.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  resultatTheme : any;
  resultatMusee : any;
  resultatExposition : any;



constructor( private themeService : ThemesService,
              private MuseeService : MuseeeService,
             private expoService : ExpositionService) {}

  ngOnInit(){
  this.getExpo();
  this.getMusee();
  this.getTheme();
  }

async getTheme() {
  this.resultatTheme = await this.themeService.getAllThemes();
}

async getMusee(){
  this.resultatMusee = await this.MuseeService.getAllMusee();
}

async getExpo(){
  this.resultatExposition = await this.expoService.getAllExposition();
}

}
