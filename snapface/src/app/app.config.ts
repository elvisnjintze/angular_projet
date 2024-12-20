import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors/index';
import { AuthInterceptor, loginInterceptor } from './core/interceptors/auth.interceptor';
import { auth2Interceptor } from './core/interceptors/auth2.interceptor';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' }, /*provideHttpClient(),
    httpInterceptorProviders, loginInterceptor*/
    provideHttpClient(), // Fournisseur pour HttpClient
    provideRouter([]), // Définir les routes, si applicable
   
  ]
};
