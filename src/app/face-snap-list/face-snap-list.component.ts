import { Component, OnInit } from '@angular/core';
import { FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  mySnaps!: FaceSnap[];
  // la classe est un type de donnée, s ajoute un tableau de type class, un tableau qui utlise le type class FaceSnap dans le principe du mot clé interface a la place de class pour le model FaceSnap
  ngOnInit():void{
    
    
  }
  
}  

//console.log("snap model", FaceSnapListComponent.mySnaps); 