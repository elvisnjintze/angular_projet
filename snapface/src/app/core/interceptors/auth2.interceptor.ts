import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const auth2Interceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService) // Injection du service d'authentification
  const authToken = authService.getToken() // Récupération du token

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}` // Ajout du header Authorization
    }
  })

  console.log('Modified request:', modifiedReq); // Debugging
  return next(modifiedReq);
}
