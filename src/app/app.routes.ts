import { Routes } from '@angular/router';

export const routes: Routes = [
  {
		path: '',
		loadChildren: () => import('@app/modules/layout/layout.routes').then((r) => r.LAYOUT_ROUTES),
	},
];
