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
  
  // donc on le declare en Type pour ts et l intialiser avec ng OnInit avec les valeur de l instance de la classe crée avecd new
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
    this.snap2 = {
      title: "2eme instance",
      description: "description test 2eme instance",
      createDate: new Date(), 
      snaps:5, 
      imageUrl: "../../assets/book-antique.jpg",  
       
    }
    this.snap3 = {
      title:"3eme instance", 
      description:"description test 3eme instance",
      createDate: new Date(), 
      snaps:3, 
      imageUrl: "../../assets/books.jpg",
      location: "Paris"
    }
    this.snap4 = {
      title: "4eme instance", 
      description:"description test 4eme instance",
      createDate: new Date(), 
      snaps:0, 
      imageUrl:"../../assets/book-library.jpg",
      location: "montagne" 
    }
    this.snap5 = {
      title:"description test 5eme instance",
      description:"description test 5me instance",
      createDate: new Date(), 
      snaps:5, 
      imageUrl:"../../assets/book-desk.jpg" 
    }
  }
}
