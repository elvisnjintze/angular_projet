import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { AuthModule } from './auth/auth.module';

export const routes: Routes = [
    { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },
    { path: 'auth', loadChildren: () => AuthModule }, // Pas lazy-loaded, mais déclaré
    {
        path: '',
        component: LandingPageComponent
    },
    
];
