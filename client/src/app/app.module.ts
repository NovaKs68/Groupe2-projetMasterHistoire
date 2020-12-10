import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import {RouterModule, Routes} from "@angular/router";
import { ModerationComponent } from './pages/moderation/moderation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'moderation', component: ModerationComponent },
  { path: '', component: AccueilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ModerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
