import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /** vous créez des  headers  utilisables par Angular avec  new HttpHeaders()
         *  et vous utilisez leur méthode  append()  pour y ajouter un header  Authorization
         *   qui contient  Bearer TOKEN   – c'est souvent la forme requise pour ce type de 
         * header ;
         * vous créez une nouvelle requête en clonant la précédente et en
         *  y ajoutant les headers que vous venez de créer – les 
         * requêtes sont des objets immuables (qu'on ne peut pas modifier), 
         * donc on créera toujours une nouvelle requête qui contient les modifications
         *  requises ; vous re ournez  next.handle()  en y passant la nouvelle 
         * requête – c'est ce qui permet à la requête de continuer son 
         * chemin.*/
     
        /*const headders = new HttpHeaders().append('Authorization',`Bareer ${this.authService.getToken()}`
        )
        const modifiedReq = req.clone({ 'headers': headders })*/
        console.log('Original request:', req);
        console.log('Token from AuthService:', this.authService.getToken())

        const modifiedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authService.getToken()}`
            }
          })
          console.log('Modified request headers:', modifiedReq.headers);
        return next.handle(modifiedReq)

    }
    /**Notre intercepteur est prêt : il faut maintenant l'enregistrer auprès 
     * d'Angular pour qu'il soit appelé pour chaque requête. */
}
export const loginInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}