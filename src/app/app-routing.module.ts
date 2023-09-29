import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'random',
    component: RandomContactPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
