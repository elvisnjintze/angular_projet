import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { auth2Interceptor } from './interceptors/auth2.interceptor';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ provideHttpClient(withInterceptors([auth2Interceptor]))],
  exports: []
})
export class CoreModule { }
