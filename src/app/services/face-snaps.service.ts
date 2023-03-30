import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model'

// Le decorateur declare la classe comme etant un service, specifiant que le service est enregistré à la racine de l application
@Injectable({
    providedIn:'root'
})

// les services n ont pas de methode ngOnInit car ne sont pas instancier de la meme maniere que les component
// on declare et on initialise le service dans la meme expression sans le bang ! qui promet une initialisation ulterieur
export class FaceSnapsService {
    mySnaps: FaceSnap[] = [
        {
          title: "test titre class",
          description: "description class model",
          createDate: new Date(), 
          snaps: 0,
          imageUrl: "../../assets/book.jpg",
          location: "Paris",
          price: 56.45489465
        },
        {
          title: "2eme instance",
          description: "description test 2eme instance",
          createDate: new Date(), 
          snaps: 0, 
          imageUrl: "../../assets/book-antique.jpg", 
          price: 47.895356 
           
        },
        {
          title:"3eme instance", 
          description:"description test 3eme instance",
          createDate: new Date(), 
          snaps: 0, 
          imageUrl: "../../assets/books.jpg",
          location: "Paris",
          price: 798865.065595
    
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
          snaps: 0, 
          imageUrl:"../../assets/book-desk.jpg" 
        }
    ]
}