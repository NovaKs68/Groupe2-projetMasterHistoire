import { Component } from '@angular/core';
import { ThemesService } from './services/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  resultatTheme: any;

constructor( private themeService : ThemesService) {}

async function() {
  this.resultatTheme = await this.themeService.getAllThemes();
}

}
