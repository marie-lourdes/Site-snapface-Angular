import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";

//declaration des routes avec le path et les components à afficher

const routes: Routes = [
    {path:"facesnaps", component: FaceSnapListComponent}
]

// import du RouterModule pour le  configurer à la racine de l application avec les routes derclaré dans le tableau routes ci dessus
//et( reexporte du RouterModule configuré)
@NgModule({

})

export class AppRoutingModule {

}