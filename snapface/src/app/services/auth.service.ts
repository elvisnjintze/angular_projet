import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    //ce token pourra etre récupéré du serveur plus tard avec le JWT
    //pour des raison d'implementation nous utilisons ce token par défaut
  private token = 'MyFakeToken';
  
  getToken(): string {
    return this.token;
  }
}