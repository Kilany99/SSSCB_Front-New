import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from 'src/app/client/client-routing-module';
import { ClientLayoutComponent } from 'src/app/client/client-layout-component';
import { ClientListComponent } from 'src/app/client/client-list-component';
import { ClientAddEditComponent } from 'src/app/client/client-add-edit-component';
import {ClientRegisterComponent} from 'src/app/client/client-register-component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ClientRoutingModule
    ],
    declarations: [
        ClientLayoutComponent,
        ClientListComponent,
        ClientAddEditComponent,
        ClientRegisterComponent
    ]
})
export class ClientModule { }