import { Component } from '@angular/core';

@Component({
  selector: 'app-hide-letters',
  standalone: true,
  imports: [],
  templateUrl: './hide-letters.component.html',
  styleUrl: './hide-letters.component.scss'
})
export class HideLettersComponent {
  nameList = ['Util', 'izadore', 's']
}
