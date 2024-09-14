import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  facesnap!: FaceSnap[];
 
  ngOnInit(): void {
    this.facesnap = [new FaceSnap( 'Fred kamga William',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      45),
      new FaceSnap( 'Elvis william njintze',
        'Moi meme je dérange !',
        'assets/images/20240604_175353.jpg',
        new Date(),
        0),
        new FaceSnap( 'Elco Business & Technologies',
          'Moi meme je dérange !',
          'assets/images/20240604_194419.jpg',
          new Date(),
          200),
          new FaceSnap( 'Njintze',
            'Moi meme je dérange !',
            'assets/images/20240604_175446.jpg',
            new Date(),
            200),
            new FaceSnap( 'Elvis William',
              'Moi meme je dérange !',
              'assets/images/441001115_465872336093419_930458666774002228_n (1).jpg',
              new Date(),
              200),
              new FaceSnap( 'Elco ',
                'Moi meme je dérange !',
                'assets/images/441526604_433908506167071_4865093239274106689_n (1).jpg',
                new Date(),
                200)];
    
    
        
        this.facesnap[1].setlocation('mon bureau à bonamoussadi')
        this.facesnap[4].setlocation('la boutique de mon ami')
        this.facesnap[5].setlocation('la boutique de wallas')
  }
}
