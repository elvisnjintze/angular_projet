import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  
  @Input() faceSnap!: FaceSnap;
  constructor(private router: Router){}

  onViewFaceSnap():void{
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
