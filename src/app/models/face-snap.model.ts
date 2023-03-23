export class FaceSnap {
    // les bang ! ne sont pas necessaires pour promettre a typescript que nous allons initialiser ces propriétes, typescript le comprend avec le constructor et l initialisation des propriétés par le constructor , 
   
    /* title: string; // declare le type de valeur des propriétés en ts
    description: string
    createDate: Date;
    snaps: number;
    snapped: boolean;
    imageUrl: string;

    constructor(
        title: string, // declare le type des valeurs des arguments
        description: string,
        createDate: Date,
        snaps: number,
        snapped: boolean,
        imageUrl: string) {
            this.title = title;
            this.description = description;
            this.createDate = createDate;
            this.snaps = snaps;
            this.snapped = snapped;
            this.imageUrl= imageUrl;
        }*/

        //avec le modificateur d acces , les propriétés sont public et accessible par une autre class comme snap de appComponent
        // il s agit d un raccourci au lieu du code ci dessus, mais comme les proprités ne sont pas declaré dans la classe 
        //qui par defaut est public, nous ajoutons le modificateur d acces "public"et nous indiquons a typescript dans les parametres du constructor de class que ces propriétés sont public 
        //sans ce modificateur, en appelant le constructor avec new, les parametres de la fonction constructor (les propriétés) ne sont pas accessible depuis l exterieur de la classe 
        constructor(public title: string, 
            public description: string,
            public createDate: Date,
            public snaps: number,
            public snapped: boolean,
            public imageUrl: string) {}
}