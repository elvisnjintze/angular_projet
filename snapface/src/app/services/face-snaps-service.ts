import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap';
import { find, Observable } from 'rxjs';
import { SnapType } from '../face-snap/models/snap-type.type';
import { HttpClient } from '@angular/common/http';
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
    //on doit récupérer les données cette fois du serveur préconstruit à l'effet
    //il tourne à l'@ http://localhost:3000
    //nous utilisons le client http de typt HttpClient et un observable
    //faceSnap$ car tout requete http à un serveur se fait de façon asynchrone
    //et nous allons attendre la reponse serveur soit la requete complète càd succès 
    //soit elle échoue alors dans ce cas elle se détruit
    
  constructor(private http: HttpClient){}
    
    /**getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
    }**/
    getFaceSnaps(): Observable<FaceSnap[]>{
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
    }

    snapFaceSnapById(facesnapid:string, snapType: SnapType):void{
        const foundSnapById = this.faceSnaps.find(faceSnap=>faceSnap.id == facesnapid);
        if (!foundSnapById){
            throw new Error("ce facesnap n'existe pas")
        }
        foundSnapById.snap(snapType)
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }
      //nous allons chercher un seul élément dans le serveur
      getFaceSnapById2(faceSnapId: string): Observable<FaceSnap> {
        
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
      }

      addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
        /*const faceSnap:FaceSnap = {
            ...formValue,
            snaps: 0,
            createDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };*/
        const faceSnap = new FaceSnap(formValue.title,formValue.description,formValue.imageUrl,new Date(),0)
        const id = this.faceSnaps[this.faceSnaps.length - 1].id + 1
          faceSnap.id = id
        this.faceSnaps.push(faceSnap);
    }
}


    