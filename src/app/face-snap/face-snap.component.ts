// import de l interface OnInit pour utliser la methode ngOnInit() pour initialiser les propriétés de FaceSnapComponent
import { Component, OnInit, Input} from '@angular/core'; 
import { FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

//les propriétés de class et les methodes ne necessite pas de mot clé var let const ou function 
//implementation de l interface OnInit
// le bang ! permet de promettre a Typescript qu on va initialiser les propriétés et de ne pas provoquer d erreur de console
export class FaceSnapComponent  implements OnInit {
  // la classe "FaceSnap" est un type de donnée qu'on declare à la proprieté faceSnap
  //Pour que la propriété du child facecomponent puissent etre injecté depuis le parent nous utilisons le decorateur @input()
  //@input() va crée une sorte de champs à la class et un attribut html au FaceComponent qui sera accessible depuis le component parent
  // La valeur de ctte proprieté sera initialisé avec la valeur d une instance de classe du component parent avec l attribute binding ( de la balise personnalisé du child app-face-snap dans le template html de l AppComponent parent
  @Input() faceSnap!: FaceSnap;

  // on garde le bouton et le snapped boolean pour tous les faceSnap et on a enlevé les autres propriétes qui seront personnalisé avec les instances du model
  snapped!: boolean; 
  buttonText!: string;
 
//Initialisation des propriétés avec la methode ngOnInit()
  ngOnInit() {
  // mieux vaut creer les differentes instance de la classe depuis le app parent que dans le child facesnapcomponent ici car on devrait creer d autres div de facesnap compmonent dans le html
  //c'est moins maintenable , dans appComponent on va creer les instance et il suffit d injecter d autres balise personnalisé de facesnap component
  // et changer le nom de l instance cree dans appComponent dans l attribute binding de la balise de facesnapcomponent dans le parent appcomponent html
  //Qaund au element html du component on ne  cree pas de div supplemenataire , juste la valeur de la propriété facesnap qui change et sera l instance propre a cette balise avec ses propres valeur injecteur depuis le parent AppComponent
   this.snapped = false; 
   this.buttonText = "oh snaps";    
  }

  //methode pour ecouter l evenement click du boutton addsnap
  //la nomenclature veut que les methodes qui ecoute les evènement commence par on
  onSnap() {
    console.log(this.snapped);
    // evenement au click et verification de l image si elle est deja snapped et selon, on effectue une modication du texte du bouton avec le changement de valeur par defaut de this.snapped sur false
        this.buttonText = this.snapped ? "Oops!yet snapped" : "oh snaps";
    if(this.snapped) { // condidtion de if à true ar defaut,  la propriété snapped est à false par defaut associé au texte du bouton "oh snaps" defini par defaut ci dessus
      //si deja cliqué et snappé on desincremente le nombre de snaps
      this.faceSnap.snaps--; 
      this.snapped = false;  
      console.log("button texte",this.buttonText);
    } else {
      this.faceSnap.snaps++;
      this.snapped = true;
      console.log("button texte",this.buttonText);
    } 
  } 
}
