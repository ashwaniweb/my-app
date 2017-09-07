import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { PhotosComponent } from './photos/photos.component';
import { GroupsComponent } from './groups/groups.component';
import { DetailComponent } from './detail/detail.component';

export const router: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      heading: 'Home'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      heading: 'Login'
  }
  },
  {
    path: 'photos',
    component: PhotosComponent,
    data: { title: 'Photos' }
  },
  {
    path: 'setting',
    component: SettingComponent,
    data: { title: 'Setting' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    data: { title: 'Categories' }
  },
  {
    path: 'groups',
    component: GroupsComponent,
    data: { title: 'groups' }
  },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Detail' }
  },
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);