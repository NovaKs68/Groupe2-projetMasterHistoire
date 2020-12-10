import { Component, OnInit } from '@angular/core';
import {ThemesService} from "../../services/theme.service";
import {MuseeeService} from "../../services/museee.service";
import {ExpositionService} from "../../services/exposition.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  resultatTheme: any;
  resultatMusee: any;
  resultatExposition: any;

  constructor(private themeService: ThemesService,
              private MuseeService: MuseeeService,
              private expoService: ExpositionService) {
  }

  ngOnInit() {
    this.getExpo();
    this.getMusee();
    this.getTheme();
  }

  async getTheme() {
    this.resultatTheme = await this.themeService.getAllThemes();
  }

  async getMusee() {
    this.resultatMusee = await this.MuseeService.getAllMusee();
  }

  async getExpo() {
    this.resultatExposition = await this.expoService.getAllExposition();
  }
}
