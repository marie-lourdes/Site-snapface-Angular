// import de l interface OnInit pour utliser la methode ngOnInit() pour initialiser les propriétés de FaceSnapComponent
import { Component, Input } from '@angular/core';
//import du router pour creer lien de maniere programmatique depuis le typescrite et non du template 
import { Router } from "@angular/router";
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

//les propriétés de class et les methodes ne necessite pas de mot clé var let const ou function 
//implementation de l interface OnInit
// le bang ! permet de promettre a Typescript qu on va initialiser les propriétés et de ne pas provoquer d erreur de console
export class FaceSnapComponent  {
  
  // la classe "FaceSnap" est un type de donnée qu'on declare à la proprieté faceSnap
  //Pour que la propriété du child facecomponent puissent etre injecté depuis le parent nous utilisons le decorateur @input()
  //@input() va crée une sorte de champs à la class et un attribut html au FaceComponent qui sera accessible depuis le component parent
  // La valeur de ctte proprieté sera initialisé avec la valeur d une instance de classe du component parent avec l attribute binding ( de la balise personnalisé du child app-face-snap dans le template html de l AppComponent parent
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService, private route: Router) {}
 
  onButtonClick() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,"snap")
  }

  // creation du lien programmatique avec Router.navigateByUrl dans la methode onViewMore() relié avec l evenement click du bouton dans le template
  onViewMore():void{
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

  /* onButtonClick() {
    this.faceSnap.snap++
  }
  */
}
