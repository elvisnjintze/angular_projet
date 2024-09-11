import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: String;
  description!:string;
  createdate!:Date;
  snaps!:number;
  imageUrl!:string;

  ngOnInit(): void {
    this.title = "Bonjour ici elco codeur";
    this.description = "premier composante que nous avons crée";
    this.createdate = new Date;
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }


}
