import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

//les propriétés de class et les methodes ne necessite pas de mot clé var let const ou function 
export class FaceSnapComponent {
  title!: string;
  description!: string
  createDate!: Date;
  snaps!: number;
}
