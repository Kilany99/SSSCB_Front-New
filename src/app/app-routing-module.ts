import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/home/home-component';
import { AuthGuard } from 'src/app/_helpers/auth-guard';

import { PostedDataListComponent } from './postedData/posted-data-list-component';

const accountModule = () => import('src/app/account/account-module').then(x => x.AccountModule);
const usersModule = () => import('src/app/users/users-module').then(x => x.UsersModule);
const clientModule = () => import('src/app/client/client-module').then(x => x.ClientModule);
const cameraModule = () => import('src/app/cameras/camera-module').then(x => x.CameraModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule,canActivate: [AuthGuard] },
    { path: 'clients', loadChildren : clientModule,canActivate: [AuthGuard]  },
    { path: 'posteddatas',component: PostedDataListComponent,canActivate: [AuthGuard]},
    { path: 'cameras',loadChildren: cameraModule,canActivate: [AuthGuard]},

    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }