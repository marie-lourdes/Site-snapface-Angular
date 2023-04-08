// import de l interface OnInit pour utliser la methode ngOnInit() pour initialiser les propriétés de FaceSnapComponent
import { Component, OnInit, Input } from '@angular/core'; 
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

  // on garde le bouton et le snapped boolean pour tous les faceSnap et on a enlevé les autres propriétes qui seront personnalisé avec les instances du model
  snapped!: boolean; 
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}
 
  onButtonClick() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,"snap")
  }

  onViewMore():void{
    
  }

  /* onButtonClick() {
    this.faceSnap.snap++
  }
  */
}
