import { Component } from '@angular/core';

import { AccountService } from 'src/app/_services/account-service';
import { User } from 'src/app/_models/user';
import { ClientService } from './_services/client-service';
import { Client } from './_models/client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSSCB_Front';
  user: User;
  client:Client;

  constructor(private accountService: AccountService,private clientService: ClientService) {
      this.accountService.user.subscribe(x => this.user = x);
      this.clientService.client.subscribe(x => this.client = x);

  }

  logout() {
      this.accountService.logout();
  }
}
