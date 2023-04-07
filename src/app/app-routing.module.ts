import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

//declaration et initialisation des routes avec le path et les components à afficher avec le type d objet Routes
const routes: Routes = [
    {path:"facesnaps", component: FaceSnapListComponent},
    {path: "", component: LandingPageComponent} //route vide avec le LandingPageComponent, home, accueil qui dirige vers les facesnaps
]

// import du RouterModule pour le  configurer à la racine de l application avec les routes declaré dans le tableau routes ci dessus
//et( reexporte du RouterModule configuré)
@NgModule({
    imports:[
        RouterModule.forRoot(routes)// configuration du RouterModule qu'on enregistre  à la racine de l application avec les routes
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}