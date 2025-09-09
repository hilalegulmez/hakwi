import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Header} from '../header/header';

@Component({
  selector: 'app-class',
  imports: [
    RouterLink,
    Header,
    RouterOutlet
  ],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {

}
