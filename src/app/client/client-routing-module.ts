import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLayoutComponent } from 'src/app/client/client-layout-component';
import { ClientListComponent } from 'src/app/client/client-list-component';
import { ClientAddEditComponent } from 'src/app/client/client-add-edit-component';
import { ClientRegisterComponent } from './client-register-component';

const routes: Routes = [
    {
        path: '', component: ClientLayoutComponent,
        children: [
            { path: '', component: ClientListComponent },
            { path: 'add', component: ClientAddEditComponent },
            { path: 'edit/:id', component: ClientAddEditComponent },
            { path: 'register', component: ClientRegisterComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }