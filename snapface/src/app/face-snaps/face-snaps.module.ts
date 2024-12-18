import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FaceSnapsRoutingModule } from './face-snaps.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FaceSnapsRoutingModule
  ]
})
export class FaceSnapsModule { }
