
import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,DatePipe,RouterLink,CommonModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  onsnap!:boolean;
  buttontext!: string;
  userHasSnapped!: boolean;
  /*plus que les propriétés sont désormais 
  dans le models/face-snap.ts il 
  faudra les importées 
  avec le décorateur @Input de la classe  
  @angular/core*/
  faceSnap!: FaceSnap;
  //nous récuperons le face snap depuis le serveur avec un observable
  facesnap$!: Observable<FaceSnap>
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){}
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
    const faceSnapId = this.route.snapshot.params['id']
    //this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId); on doit changer la méthode 
    //on ira chercher le faceSnap dans le serveur 
    this.facesnap$ = this.faceSnapsService.getFaceSnapById2(faceSnapId)
  }

  onaddsnaps(): void{
    if (this.onsnap){
     this.unsnap();
    }else{
      this.snap();
    }  
  }

  snap():void{
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.userHasSnapped = true;
      this.buttontext = "oops unsnap!";
      this.onsnap = true;
  }

  unsnap(): void{
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.userHasSnapped = false
    this.onsnap =false;
    this.buttontext = "oh snap!"
  }

}
