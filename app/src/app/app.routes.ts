import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'hide-letters', pathMatch: 'full' },
  {
    path: 'hide-letters',
    loadComponent: () =>
      import('./hide-letters/hide-letters.component').then((m) => m.HideLettersComponent),
  },
  {
    path: 'shrouded-card-list',
    loadComponent: () =>
      import('./shrouded-card-list/shrouded-card-list.component').then((m) => m.ShroudedCardListComponent),
  },
  { path: '**', redirectTo: '' },
];
