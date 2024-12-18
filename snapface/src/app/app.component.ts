import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snaps/components/face-snap/face-snap.component';
import { FaceSnap } from './core/models/face-snap';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
