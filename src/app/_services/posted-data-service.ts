import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PostedData } from '../_models/posted-data';

@Injectable({ providedIn: 'root' })
export class PostedDataService {
    private postedDataSubject: BehaviorSubject<PostedData> ;
    public postedData: Observable<PostedData>;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.postedDataSubject = new BehaviorSubject<PostedData>(JSON.parse(localStorage.getItem('postedData')!));
        this.postedData = this.postedDataSubject.asObservable();
    }

    public get postedDataValue(): PostedData {
        return this.postedDataSubject.value;
    }

    getAll() {
        return this.http.get<PostedData[]>(`${environment.apiUrl}/Values/data`);
    }

    getById(id: string) {
        return this.http.get<PostedData>(`${environment.apiUrl}/Values/data/${id}`);
    }
    getScreenShot(id:string){
        return this.http.get<string>(`${environment.apiUrl}/Values/data/screenshot/${id}`);
    }

}