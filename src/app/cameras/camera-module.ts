import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CmaeraRoutingModule } from 'src/app/cameras/camera-routing-module';
import { CameraLayoutComponent } from 'src/app/cameras/camera-layout-component';
import { CameraListComponent } from 'src/app/cameras/camera-list-component';
import { CameraAddEditComponent } from 'src/app/cameras/camera-add-edit-component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CmaeraRoutingModule
    ],
    declarations: [
        CameraLayoutComponent,
        CameraListComponent,
        CameraAddEditComponent
    ]
})
export class CameraModule { }