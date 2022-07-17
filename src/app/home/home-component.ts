import { Component } from '@angular/core';

import { User } from 'src/app/_models/user';
import { Client } from 'src/app/_models/client';

import { AccountService } from 'src/app/_services/account-service';
import {ClientService} from'src/app/_services/client-service';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    client:Client;
    constructor(private accountService: AccountService,private clientService: ClientService) {
        this.user = this.accountService.userValue;
        this.client = this.clientService.clientValue;

    }
}