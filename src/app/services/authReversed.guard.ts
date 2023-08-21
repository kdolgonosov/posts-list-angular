import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authReversedGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  router.url;
  if (!token) {
    return true;
  } else {
    router.navigate(['posts']);
    return false;
  }
};
