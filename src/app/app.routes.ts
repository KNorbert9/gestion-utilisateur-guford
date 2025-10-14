import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { CustomHeaderComponent } from './layout/custom-header/custom-header.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'declarations',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/produits/route').then((m) => m.routes)
      },

    ]
  },
  { path: '**', redirectTo: '404' }
];
