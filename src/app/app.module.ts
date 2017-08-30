import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import 'hammerjs';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule,
  MdGridListModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdFormFieldModule,
  MdInputModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdTooltipModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PhotosComponent } from './photos/photos.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    SettingComponent,
    LoginComponent,
    DetailComponent,
    ToolbarComponent,
    ContentComponent,
    HomeComponent,
    CategoriesComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdFormFieldModule,
    MdInputModule,
    MdListModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
