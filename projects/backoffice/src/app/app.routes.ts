import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/default-layout/default-layout.component')
        .then(m => m.DefaultLayoutComponent),
    children: [
      {
        path: 'submitted',
        loadComponent: () =>
          import('./pages/submitted/submitted.component')
            .then(m => m.SubmittedComponent),
      },
      { path: '', pathMatch: 'full', redirectTo: 'submitted' },
    ],
  },
];
