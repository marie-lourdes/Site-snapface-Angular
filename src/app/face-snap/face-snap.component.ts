// import de l interface OnInit pour utliser la methode ngOnInit() pour initialiser les propriétés de FaceSnapComponent
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

//les propriétés de class et les methodes ne necessite pas de mot clé var let const ou function 
//implementation de l interface OnInit
// le bang ! permet de promettre a Typescript qu on va initialiser les propriétés et de ne pas provoquer d erreur de console
export class FaceSnapComponent  implements OnInit {
  title!: string;
  description!: string
  createDate!: Date;
  snaps!: number;
  snapped!: boolean;
  buttonText!: string;
  imageUrl!: string;
 

//Initialisation des propriétés avec la methode ngOnInit()
  ngOnInit() {
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis tout petit";
    this.createDate = new Date();
    this.snaps = 6;
    this.snapped = false;
    this.buttonText = "oh snaps";
    this.imageUrl= "../../assets/book.jpg";
  }

  //methode pour ecouter l evenement click du boutton addsnap
  //la nomenclature veut que les methodes qui ecoute les evènement commence par on
  onSnap() {
  console.log(this.snapped);

    this.buttonText= this.snapped ? "Oops!yet snapped" : "oh snaps";
    if(this.snapped) { // condidtion de if à true ar defaut
      this.snaps--; 
      this.snapped = false;  
      console.log("button texte",this.buttonText);
    } else {
      this.snaps++;
      this.snapped = true;
      console.log("button texte",this.buttonText);
    }

    /*CORRIGÉ*/

    /*if (this.buttonText === 'Oh Snap!') {
    this.snaps++;
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.snaps--;
    this.buttonText = 'Oh Snap!';
  }*/

  } 
}
