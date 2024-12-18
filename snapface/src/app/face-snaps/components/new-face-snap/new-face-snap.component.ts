import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit{
  snapForm!: FormGroup
  faceSnapPreview$!: Observable<FaceSnap>//cet observable permet d'écouter le formulaire pour 
  //détecter un changement de valeur d'un champ
  urlRegex!: RegExp //Vous allez maintenant ajouter un deuxième Validator au champ  imageUrl 
  // pour vérifier que le texte entré par l'utilisateur correspond à une URL – il s'agit de  
  //Validators.pattern  , qui compare la valeur entrée à une expression régulière (RegExp).
  //Déclarez une variable qui contiendra le pattern  RegExp
  constructor(private formbuilder: FormBuilder,private faceSnapsService:FaceSnapsService,private router:Router){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm =  this.formbuilder.group({
      title:[null,Validators.required],
      description: [null,Validators.required],
      imageUrl: [null,Validators.required, /*Validators.pattern(this.urlRegex)*/],//on vérifie que l'url est 
      //sous la forme de l'expression régulière énoncée dans urlRegex
      location: [null]
    },
  //nous pouvons modifier le déclenchement de  valueChanges  du
  // formulaire pour émettre uniquement lorsque l'utilisateur change de champ, c'est-à-dire 
  //lors du  blur  des différents champs. Pour ceci, nous allons passer un objet de configuration 
  //à la méthode  group  
    {updateOn: 'blur'})
  //lorsque les valeurs du formulaire change, on recupère l'objet snapForm et on il rajoute 
  //les champs manquant avec la fonction map pourqu'il soit une FaceSnap
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,//copie de l'intégralité du formulaire snapForm
          createDate: new Date(),
          snaps: 0,
          id: 0
      }))
  );
  }
  onSubmitForm():void{
    //on ajoute le facesnap si l'ajout est réussi alors se redirige vers
    //la liste des snapface
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe
    (tap(()=>this.router.navigateByUrl('/facesnaps'))).subscribe()
  }
}
