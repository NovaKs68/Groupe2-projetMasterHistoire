import { Component } from '@angular/core';
import { ThemesService } from './services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor( private themeService : ThemesService) {}

function(){
  const resultatTheme = this.themeService.getAllThemes();
}

}
