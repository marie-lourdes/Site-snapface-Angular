import { Component, OnInit } from '@angular/core';
import { FaceSnap} from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  snap!: FaceSnap;// la classe est un type de donnée,
  snap2!: FaceSnap;
  snap3!: FaceSnap;
  snap4!: FaceSnap;
  snap5!: FaceSnap;
  
  // donc on le declare en Type pour ts et l intialiser avec ng OnInit avec les valeur de l instance de la classe
  ngOnInit() {
    this.snap = {
      title: "test titre class",
      description: "description class model",
      createDate: new Date(), 
      snaps: 1,
      imageUrl: "../../assets/book.jpg",
      location: "Paris"
    }
    console.log("snap instance model",this.snap);
    this.snap2 =  {
      title: "2eme instance",
      description: "description test 2eme instance",
      createDate: new Date(), 
      snaps:5, 
      imageUrl: "../../assets/book-antique.jpg"
      location: "Paris"
    }
    this.snap3 = new FaceSnap("3eme instance", "description test 3eme instance", new Date(), 3, "../../assets/books.jpg");
    this.snap4 = new FaceSnap("4eme instance", "description test 4eme instance", new Date(), 0, "../../assets/book-library.jpg");
    this.snap5 = new FaceSnap("5eme instance", "description test 5eme instance", new Date(), 5, "../../assets/book-desk.jpg");
  }
}
