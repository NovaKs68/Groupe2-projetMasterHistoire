import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ThemesService} from "../../services/theme.service";
import {MuseeeService} from "../../services/museee.service";
import {ExpositionService} from "../../services/exposition.service";

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss']
})
export class ModerationComponent implements OnInit {

/*  expositionPost: FormGroup;
  museePost: FormGroup;
  themePost: FormGroup;*/
  nameTheme = new FormControl('');
  nameMusee = new FormControl('');
  adresseMusee = new FormControl('');
  villeMusee = new FormControl('');
  codePostalMusee = new FormControl('');
  horairesMusee = new FormControl('');
  tarifReduitMusee = new FormControl('');
  tarifPleinMusee = new FormControl('');
  nameExposition = new FormControl('');
  dateDebutExposition = new FormControl('');
  dateFinExposition = new FormControl('');
  tarifExposition = new FormControl('');
  trancheAgeExposition = new FormControl('');
  idMuseeExposition = new FormControl('');
  idThemeExposition = new FormControl('');

  constructor(private themeService: ThemesService,
              private museeService: MuseeeService,
              private expoService: ExpositionService) {
  }

  ngOnInit(): void {
  }

  onFormSubmitMusee() {
    this.museeService.postMusee(this.nameMusee.value,this.adresseMusee.value, this.villeMusee.value, this.codePostalMusee.value, this.horairesMusee.value, this.tarifReduitMusee.value, this.tarifPleinMusee.value)
  }

  onFormSubmitTheme() {
    console.log(this.nameTheme.value)
    this.themeService.postTheme(this.nameTheme.value);
  }

  onFormSubmitExposition() {
    this.expoService.postExposition(this.nameExposition.value,this.dateDebutExposition.value, this.dateFinExposition.value, this.tarifExposition.value, this.trancheAgeExposition.value, this.idMuseeExposition.value, this.idThemeExposition.value)
  }
}
