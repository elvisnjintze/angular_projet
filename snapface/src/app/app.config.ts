import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors/index';
import { AuthInterceptor, loginInterceptor } from './interceptors/auth.interceptor';
import { auth2Interceptor } from './interceptors/auth2.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' }, /*provideHttpClient(),
    httpInterceptorProviders, loginInterceptor*/ provideHttpClient(withInterceptors([auth2Interceptor]))
  ]
};
