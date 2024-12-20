import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private auth: AuthService, private route: Router){}
  ngOnInit(): void {
    
  }
  onLogin():void{
    this.auth.login()//on appele tout d'abord la méthode login du service auth
    this.route.navigateByUrl('/facesnaps')
  } 

}
