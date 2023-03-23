export class FaceSnap {
    // les bang ! ne sont pas necessaires pou promettre a typescript que nous allons initialiser ces propriétes typescript le comprend avec le constructor et l initialisation des propriétés par le constructor , 
    title: string;
    description: string
    createDate: Date;
    snaps: number;
    snapped: boolean;
    imageUrl: string;

    constructor(
        title: string, 
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
        }
}