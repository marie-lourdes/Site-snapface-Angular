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
  imageUrl!: string;

//Initialisation des propriétés avec la methode ngOnInit()
  ngOnInit() {
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis tout petit";
    this.createDate = new Date();
    this.snaps = 6;
    this.imageUrl= "../../assets/book.jpg";
  }
}
