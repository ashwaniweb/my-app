import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import 'hammerjs';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PhotosComponent } from './photos/photos.component';
import { GroupsComponent } from './groups/groups.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingComponent,
    LoginComponent,
    DetailComponent,
    ContentComponent,
    HomeComponent,
    CategoriesComponent,
    PhotosComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
