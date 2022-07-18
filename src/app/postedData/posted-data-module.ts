import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PostedDataRoutingModule } from './posted-data-routing-module';
import { PostedDataListComponent } from './posted-data-list-component';
import { ImageContainerComponent } from '../ImageContainer/image-container/image-container.component';
import { PostedDataContainerComponent } from './posted-data-container-component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PostedDataRoutingModule
    ],
    declarations: [
        PostedDataListComponent,
        PostedDataContainerComponent
    ]
})
export class PostedDataModule { }