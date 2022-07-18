import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraLayoutComponent } from 'src/app/cameras/camera-layout-component';
import { CameraListComponent } from 'src/app/cameras/camera-list-component';
import { CameraAddEditComponent } from 'src/app/cameras/camera-add-edit-component';

const routes: Routes = [
    {
        path: '', component: CameraLayoutComponent,
        children: [
            { path: '', component: CameraListComponent },
            { path: 'add', component: CameraAddEditComponent },
            { path: 'edit/:id', component: CameraAddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CmaeraRoutingModule { }