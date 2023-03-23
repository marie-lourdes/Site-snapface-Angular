import { Component, OnInit } from '@angular/core';
import { FaceSnap} from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  snap!: FaceSnap;// la classe est un type de donnée,
  // donc on le declare en Type pour ts et l intialiser avec ng OnInit avec les valeur de l instance de la classe
  ngOnInit() {
    this.snap = new FaceSnap("test titre class", "description class model", new Date(), 0, false, "../../assets/book.jpg");
    console.log("snap instance model",this.snap);
  }

}
