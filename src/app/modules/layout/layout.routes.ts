// Angular imports
import { Routes } from '@angular/router';
// Components
import { LayoutComponent } from './layout.component';
import { ROUTES } from '@app/shared/utils';
import { routeIdGuard } from '@app/shared/guards/route-id.guard';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ROUTES.list,
        loadComponent: () => import('./views/list-heroes/list-heroes.component').then((c) => c.ListHeroesComponent),
      },
      {
        path: ROUTES.add,
        loadComponent: () => import('./views/add-hero/add-hero.component').then((c) => c.AddHeroComponent),
      },
      {
        path: `${ROUTES.edit}/:id`,
        loadComponent: () => import('./views/edit-hero/edit-hero.component').then((c) => c.EditHeroComponent),
        canMatch: [routeIdGuard]
      },
      { path: '**', redirectTo: ROUTES.list, pathMatch: 'full' },
    ]
  },
];
