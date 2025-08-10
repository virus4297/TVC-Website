import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-letslearnscratch',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './letslearnscratch.component.html',
  styleUrl: './letslearnscratch.component.css'
})
export class LetslearnscratchComponent {
  public currentPage: string = 'letslearnscratch';

}
