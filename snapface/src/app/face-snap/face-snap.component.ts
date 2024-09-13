import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe],
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
    this.faceSnap.snaps++;
    this.userHasSnapped = true;
      this.buttontext = "oops unsnap!";
      this.onsnap = true;
  }

  unsnap(): void{
    this.faceSnap.snaps--;
    this.userHasSnapped = false
    this.onsnap =false;
    this.buttontext = "oh snap!"
  }
}
