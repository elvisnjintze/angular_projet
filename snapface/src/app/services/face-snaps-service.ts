import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        // vos FaceSnap ici
        //nous récupérons la déclaration et la definition du talbeau dans face-snap-list.component.ts
        new FaceSnap( 'Fred kamga William',
            'Mon meilleur ami depuis tout petit !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            45),
            new FaceSnap( 'Elvis william njintze',
              'Moi meme je dérange !',
              'assets/images/20240604_175353.jpg',
              new Date(),
              0).withlocation('mon bureau à bonamoussadi'),
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
                    200).withlocation('la boutique de mon ami'),
                    new FaceSnap( 'Elco ',
                      'Moi meme je dérange !',
                      'assets/images/441526604_433908506167071_4865093239274106689_n (1).jpg',
                      new Date(),
                      200).withlocation('la boutique de wallas')
    ];
    
    getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
    }
}


    