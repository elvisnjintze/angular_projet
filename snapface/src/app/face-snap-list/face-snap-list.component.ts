import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps-service';
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  facesnap!: FaceSnap[];
  constructor(private facesnapservice: FaceSnapsService){}
 
  ngOnInit(): void {
    this.facesnap = this.facesnapservice.getFaceSnaps();
    
    
        
        
  }
}
