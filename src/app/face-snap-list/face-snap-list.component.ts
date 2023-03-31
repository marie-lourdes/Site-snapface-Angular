import { Component, OnInit } from '@angular/core';
//import du model de donnée facesnap
import { FaceSnap} from '../models/face-snap.model';
//import du service facesnapservice qui partage les données des facesnap
import {FaceSnapsService} from "../services/face-snaps.service"

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  // la classe est un type de donnée, s ajoute un tableau de type class, un tableau qui utlise le type class FaceSnap dans le principe du mot clé interface a la place de class pour le model FaceSnap
  listFaceSnaps!: FaceSnap[]; // tableau de type  FaceSnap class model de données

  // injection de dependance avec le constructor et le modificateur d acces private
  //le constructor declare et initialise  l argument faceSnapservice
  //avec le modificateur d acces private, l argument faceSnapService du constructor est declaré aussi en tant que propriété de la class
  constructor( private faceSnapsService: FaceSnapsService){}

  ngOnInit() {
    this.listFaceSnaps = this.faceSnapsService.mySnaps;
    console.log("snap model", this.listFaceSnaps); 
  }
}  

