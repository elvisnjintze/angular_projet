import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './face-snap/models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  facesnap!: FaceSnap[];
 
  ngOnInit(): void {
    this.facesnap = [new FaceSnap( 'Fred kamga William',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0),
      new FaceSnap( 'Elvis william njintze',
        'Moi meme je dérange !',
        'assets/images/20240604_175353.jpg',
        new Date(),
        0),
        new FaceSnap( 'Elco Business & Technologies',
          'Moi meme je dérange !',
          'assets/images/20240604_194419.jpg',
          new Date(),
          0)];
    
    
        
        this.facesnap[1].setlocation('mon bureau à bonamoussadi')
  }
}
