import { Component } from '@angular/core';

// import du Router Angular
import { Router } from "@angular/router"

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
//injection de dependance pour utiliser le Router
constructor( private router: Router){}
  onContinue():void {
   
  }
}
