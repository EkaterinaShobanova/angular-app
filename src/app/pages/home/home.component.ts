
import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RouterModule} from '@angular/router';



@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  }


