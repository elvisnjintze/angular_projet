import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    //ce token pourra etre récupéré du serveur plus tard avec le JWT
    //pour des raison d'implementation nous utilisons ce token par défaut
  private token!: string;
  
  getToken(): string {
    return this.token;
  }
  login() {
    this.token = 'MyFakeToken';//un token par défaut (nous implementerons la récupération du token à partir 
    // du serveur avec les informations de connection login & password)
  }
}