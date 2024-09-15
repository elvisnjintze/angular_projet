import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  onsnap!:boolean;
  buttontext!: string;
  userHasSnapped!: boolean;
  /*plus que les propriétés sont désormais 
  dans le models/face-snap.ts il 
  faudra les importées 
  avec le décorateur @Input de la classe  
  @angular/core*/
  @Input() faceSnap!: FaceSnap;
  constructor(private facesnapservice: FaceSnapsService){}
  /*ceci équivaut à créer une propiété privée dans la classe
  et de l'nitialiser parce que lorsqu'on appelle FaceSnapService
  un tableau prérempli est crée et nous allons utiliser ses methodes 
  snapFaceSnapById et unsnapFaceSnapById pour que l'action de 
  snapper et de unsnapper de l'user soit repercuter directement sur le 
  tableau non sur l'interface(ceci pour préparer au préalable le backend)
  facesnapservice!: FaceSnapsService
  constructor(){
    this.facesnapservice = new FaceSnapsService
  }*/

  ngOnInit(): void {  
    this.onsnap = false;
    this.buttontext = "oh snap!"
    this.userHasSnapped = false;
  }

  onaddsnaps(): void{
    if (this.onsnap){
     this.unsnap();
    }else{
      this.snap();
    }  
  }

  snap():void{
    this.facesnapservice.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.userHasSnapped = true;
      this.buttontext = "oops unsnap!";
      this.onsnap = true;
  }

  unsnap(): void{
    this.facesnapservice.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.userHasSnapped = false
    this.onsnap =false;
    this.buttontext = "oh snap!"
  }
}
