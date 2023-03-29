//import de LOCALE_ID
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
//import de la methode registerlocaleData et de la local 'fr'
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'} // Inplementation dans le decorateur ngModule de LOCALE_ID et de la valeur de la locale fr-FR
  ],
  bootstrap: [AppComponent]
})

//Modification du AppModule avec le constructor et la methode registerLocaleDate avec pour argument la locale fr et sa propriété par defaut
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
