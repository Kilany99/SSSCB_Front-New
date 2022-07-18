import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Camera } from '../_models/camera';

@Injectable({ providedIn: 'root' })
export class CameraService {
    private cameraSubject: BehaviorSubject<Camera> ;
    public camera: Observable<Camera>;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.cameraSubject = new BehaviorSubject<Camera>(JSON.parse(localStorage.getItem('camera')!));
        this.camera = this.cameraSubject.asObservable();
    }

    register(camera: Camera) {
        return this.http.post(`${environment.apiUrl}/Cameras/register`, camera);
    }
    public get cameraValue(): Camera {
        return this.cameraSubject.value;
    }

    getAll() {
        return this.http.get<Camera[]>(`${environment.apiUrl}/Cameras`);
    }

    getById(id: string) {
        return this.http.get<Camera>(`${environment.apiUrl}/Cameras/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/Cameras/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.cameraValue.camerazoneid) {
                    // update local storage
                    const camera = { ...this.cameraValue, ...params };
                    localStorage.setItem('camera', JSON.stringify(camera));

                    // publish updated user to subscribers
                    this.cameraSubject.next(camera);
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