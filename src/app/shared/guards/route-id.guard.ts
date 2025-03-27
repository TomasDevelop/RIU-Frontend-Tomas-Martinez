import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { HeroesService } from '@app/modules/layout';

export const routeIdGuard: CanActivateFn = (route, state) => {
  const hero = inject(HeroesService)

  return true;
};
