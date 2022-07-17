import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ClientService } from '../_services/client-service';

@Component({ templateUrl: 'client-list-component.html' })
export class ClientListComponent implements OnInit {
    clients: any[] ;

    constructor(private clientService: ClientService) {}

    ngOnInit() {
        this.clientService.getAll()
            .pipe(first())
            .subscribe(clients => this.clients = clients);
    }

    deleteClient(id: string) {
        const client = this.clients.find(x => x.id === id);
        client.isDeleting = true;
        this.clientService.delete(id)
            .pipe(first())
            .subscribe(() => this.clients = this.clients.filter(x => x.id !== id));
    }
}