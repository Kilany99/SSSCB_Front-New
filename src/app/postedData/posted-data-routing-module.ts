import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ImageContainerComponent } from '../ImageContainer/image-container/image-container.component';
import { PostedDataContainerComponent } from './posted-data-container-component';
import { PostedDataListComponent } from './posted-data-list-component';

const routes: Routes = [
    {
        path: '', component: PostedDataListComponent,
        children: [
            { path: 'show', component: PostedDataContainerComponent },
            { path: 'show/:id', component: PostedDataContainerComponent },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostedDataRoutingModule { }