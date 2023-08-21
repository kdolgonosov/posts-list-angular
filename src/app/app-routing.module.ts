import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { SingUpPageComponent } from './pages/signup-page/signup-page.component';
import { authGuard } from './services/auth.guard';
import { authReversedGuard } from './services/authReversed.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'signup',
    component: SingUpPageComponent,
    canActivate: [authReversedGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [authReversedGuard],
  },
  { path: 'posts', component: PostsPageComponent, canActivate: [authGuard] },
  { path: 'posts/:id', component: PostPageComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
