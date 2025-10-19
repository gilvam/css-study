import { Component } from '@angular/core';
import { ActualWidthDirective } from './directives/actual-width.directive';

@Component({
  selector: 'app-hide-letters',
  standalone: true,
  imports: [
    ActualWidthDirective
  ],
  templateUrl: './hide-letters.component.html',
  styleUrl: './hide-letters.component.scss'
})
export class HideLettersComponent {
  nameList = ['Util', 'izadore', 's']
}
