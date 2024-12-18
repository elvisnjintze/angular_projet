import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  constructor(private route: Router){}
  ngOnInit(): void {
    
  }
onAddNewFaceSnap():void{
  this.route.navigateByUrl("facesnaps/create")
}
}
