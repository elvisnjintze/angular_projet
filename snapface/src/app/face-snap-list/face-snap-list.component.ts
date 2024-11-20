import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent,CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  facesnap!: FaceSnap[];
  facesnaps$!: Observable<FaceSnap[]>//nos nouvelles données proviennent désormais qui serveujr 
  //backend via une requete http assynchrone d'où elles sont recupéreées sous 
  //forme d'observable
  constructor(private facesnapservice: FaceSnapsService){}
 
  ngOnInit(): void {
    //this.facesnap = this.facesnapservice.getFaceSnaps();
    this.facesnaps$ = this.facesnapservice.getFaceSnaps();
    
    
        
        
  }
}
