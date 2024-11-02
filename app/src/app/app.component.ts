import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShroudedCardListComponent } from './shrouded-card-list/shrouded-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShroudedCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'css-study';
}
