import {Injectable} from '@angular/core'; 
// deuxieme alternative plus recent import de la fonction "inject", avec la creation non pas d une class mais d une fonction comme service qui apelle inject()
import {FaceSnap} from '../models/face-snap.model'

// Le decorateur declare la classe comme etant un service, specifiant que le service est enregistré à la racine de l application
@Injectable({
    providedIn:'root'
})

// les services n ont pas de methode ngOnInit car ne sont pas instancier de la meme maniere que les component
// on declare et on initialise le service dans la meme expression sans le bang ! qui promet une initialisation ulterieur
export class FaceSnapsService {
  //centralisation des données FaceSnaps dans le service
    mySnaps: FaceSnap[] = [
        {
          id: 1,
          title: "test titre class",
          description: "description class model",
          createDate: new Date(), 
          snaps: 0,
          imageUrl: "../../assets/book.jpg",
          location: "Paris",
          price: 56.45489465
        },
        {
          id: 2,
          title: "2eme instance",
          description: "description test 2eme instance",
          createDate: new Date(), 
          snaps: 0, 
          imageUrl: "../../assets/book-antique.jpg", 
          price: 47.895356 
           
        },
        {
          id: 3,
          title:"3eme instance", 
          description:"description test 3eme instance",
          createDate: new Date(), 
          snaps: 0, 
          imageUrl: "../../assets/books.jpg",
          location: "Paris",
          price: 798865.065595
    
        },
        {
          id: 4,
          title: "4eme instance", 
          description:"description test 4eme instance",
          createDate: new Date(), 
          snaps: 0, 
          imageUrl:"../../assets/book-library.jpg",
          location: "montagne" 
        },
        {
          id: 5,
          title:"description test 5eme instance",
          description:"description test 5me instance",
          createDate: new Date(), 
          snaps: 0, 
          imageUrl:"../../assets/book-desk.jpg" 
        }
    ]

    //centralisation des methodes relatives au données FaceSnaps dans le service
    // creation de la methode pour recuperer les données facesnap a utiliser dans les compoents qui en ont besoin tel que FaceSnapListComponent
    //declare la le type de retour de la fonction qui est FaceSnap[]
    getAllFaceSnaps():FaceSnap[] {
      return this.mySnaps;
    }

    /*REFACTORISATION: des fonctions snapfaceById et unsnapById en une seule fonction de verification de l id sans l incrementation
    et la desincrementation qui sera une methode.*/
    //le but etant de ne pas repeter les bloc de code if else des deux methodes snap et unsanpFaceSnapByid et d avoir une fonction ou methode qui ne fasse q une seuele tache
    //pour respecter les principes de developement DRY et maintenabilité du code

    //refactorisation et creation de la methode getFaceSnapById () pour la verification de l id du FaceSnap et retourne si il existe le facesnap
    getFaceSnapById (faceSnapId: number):FaceSnap { //deeclaration du type de retour de la methode qui sera un FaceSnap de type class modele de donnée
       //find renvoit undefined si il ne trouve pas l element correspondant à la condition
       const faceSnap = this.mySnaps.find(snap => snap.id === faceSnapId);
       if (!faceSnap) {
        throw new Error('FaceSnap not found!');      
       } else {
          return faceSnap; 
       }
    }

    /* refactorisation1 de la methode snapFaceSnapById avec les operateur ternaires et le snapType
    // qui permettra de snap et unsnapper en appelant egalement la methode getFaceSnapById

    snapFaceSnapById(faceSnapId: number, snapType: string): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }*/

     // refactorisation2 de la methode snapFaceSnapById en ajoutant Les literal Types
    // qui permettra de snap et unsnapper en appelant egalement la methode getFaceSnapById
    // en limitant les ereurs et le type de snapType

    snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
  }

    /*
    //methode snapFaceSnapById
    snapFaceSnapById(mySnapId: number): void {
      //find renvoit undefined si il ne trouve pas l element correspondant à la condition
      const faceSnap = this.mySnaps.find(snap => snap.id === mySnapId);
      if (faceSnap) {
          faceSnap.snaps++;
      } else {
          throw new Error('FaceSnap not found!');
      }
    }
     //methode unsnapFaceSnapById
     unsnapFaceSnapById(mySnapId: number): void {
      //find renvoit undefined si il ne trouve pas l element correspondant à la condition
      const faceSnap = this.mySnaps.find(snap => snap.id === mySnapId);
      if (faceSnap) {
          faceSnap.snaps--;
      } else {
          throw new Error('FaceSnap not found!');
      }
    }
  */ 
}