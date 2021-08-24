import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContainer } from './pages/home/home.container';
import { UserDetailContainer } from './pages/user-detail/user-detail.container';
import { UsersContainer } from './pages/users/users.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeContainer
  },
  {
    path: 'users',
    component: UsersContainer
  },
  {
    path: 'users/:id',
    component: UserDetailContainer
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
