import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css',
})
export class DeveloperComponent {
    public currentPage: string = 'developer';

}
