import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Client } from 'src/app/_models/client';

@Injectable({ providedIn: 'root' })
export class ClientService {
    private clientSubject: BehaviorSubject<Client> ;
    public client: Observable<Client>;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.clientSubject = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('client')!));
        this.client = this.clientSubject.asObservable();
    }

    public get clientValue(): Client {
        return this.clientSubject.value;
    }

    


    register(client: Client) {
        return this.http.post(`${environment.apiUrl}/Clients/register`, client);
    }

    getAll() {
        return this.http.get<Client[]>(`${environment.apiUrl}/Clients`);
    }

    getById(id: string) {
        return this.http.get<Client>(`${environment.apiUrl}/Clients/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/Clients/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.clientValue.id) {
                    // update local storage
                    const client = { ...this.clientValue, ...params };
                    localStorage.setItem('client', JSON.stringify(client));

                    // publish updated user to subscribers
                    this.clientSubject.next(client);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/Clients/${id}`)
            .pipe(map(x => {
                
                return x;
            }));
    }
}