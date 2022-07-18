import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientDetailsFormComponent } from './client-details/client-details-form/client-details-form.component';
import { FormsModule } from '@angular/forms';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CamerasDetailsComponent } from './cameras-details/cameras-details.component';
import { CamerasDetailsFormComponent } from './cameras-details/cameras-details-form/cameras-details-form.component';
import { NavBarComponent } from './menus/nav-bar/nav-bar.component';
import { AlertComponent } from './alert/alert.component';
import {fakeBackendProvider} from 'src/app/_helpers/fake-backend-interceptor'
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/_helpers/error-interceptor';
import { JwtInterceptor } from 'src/app/_helpers/jwt-interceptor';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing-module';
import { PostedDataListComponent } from './postedData/posted-data-list-component';
import { CameraListComponent } from './cameras/camera-list-component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientDetailsFormComponent,
    ClientsListComponent,
    CamerasDetailsComponent,
    CamerasDetailsFormComponent,
    NavBarComponent,
    AlertComponent,
    PostedDataListComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([]),
    AppRoutingModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
