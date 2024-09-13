import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  
  onsnap!:boolean;
  buttontext!: string;
  /*plus que les propriétés sont désormais 
  dans le models/face-snap.ts il 
  faudra les importées 
  avec le décorateur @Input de la classe  
  @angular/core*/
  @Input() faceSnap!: FaceSnap;

  ngOnInit(): void {
    
    this.onsnap = false;
    this.buttontext = "oh snap!"

  }

  onaddsnaps(): void{
    if (this.onsnap){
     this.unsnap();
    }else{
      this.snap();
    }
    
  }

  snap():void{
    this.faceSnap.snaps++;
      this.buttontext = "oops unsnap!";
      this.onsnap = true;
  }

  unsnap(): void{
    this.faceSnap.snaps--;
    this.onsnap =false;
    this.buttontext = "oh snap!"
  }
}
