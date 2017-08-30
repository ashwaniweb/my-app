import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { PhotosComponent } from './photos/photos.component';

export const router: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
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
  }
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);