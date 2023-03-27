import { Component, OnInit } from '@angular/core';
import { FaceSnap} from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mySnaps!: FaceSnap[];
  // la classe est un type de donnée, s ajoute un tableau de type class, un tableau qui utlise le type class FaceSnap dans le principe du mot clé interface a la place de class pour le model FaceSnap
  ngOnInit() {
    this.mySnaps = [
      {
        title: "test titre class",
        description: "description class model",
        createDate: new Date(), 
        snaps: 50,
        imageUrl: "../../assets/book.jpg",
        location: "Paris"
      },
      {
        title: "2eme instance",
        description: "description test 2eme instance",
        createDate: new Date(), 
        snaps: 5, 
        imageUrl: "../../assets/book-antique.jpg",  
         
      },
      {
        title:"3eme instance", 
        description:"description test 3eme instance",
        createDate: new Date(), 
        snaps: 3, 
        imageUrl: "../../assets/books.jpg",
        location: "Paris"
      },
      {
        title: "4eme instance", 
        description:"description test 4eme instance",
        createDate: new Date(), 
        snaps: 0, 
        imageUrl:"../../assets/book-library.jpg",
        location: "montagne" 
      },
      {
        title:"description test 5eme instance",
        description:"description test 5me instance",
        createDate: new Date(), 
        snaps: 5, 
        imageUrl:"../../assets/book-desk.jpg" 
      }
    ]
    console.log("snap model",this.mySnaps);
  }  
}
