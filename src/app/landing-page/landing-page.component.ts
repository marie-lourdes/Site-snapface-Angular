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
  // navigation programmatique avec la Router.navigateByUrl() dans la methode onContinue() appelé dans l event binding du bouton dans le template
  onContinue():void {
    this.router.navigateByUrl("facesnaps")
  }
}
