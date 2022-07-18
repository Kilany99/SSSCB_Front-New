import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CameraService } from '../_services/camera-service';


@Component({ templateUrl: 'camera-list-component.html' })
export class CameraListComponent implements OnInit {
    cameras: any[] ;

    constructor(private cameraService: CameraService) {}

    ngOnInit() {
        this.cameraService.getAll()
            .pipe(first())
            .subscribe(cameras => this.cameras = cameras);
            
    }
    deleteCamera(id: string) {
        const camera = this.cameras.find(x => x.cameraZoneid === id);
        camera.isDeleting = true;
        this.cameraService.delete(id)
            .pipe(first())
            .subscribe(() => this.cameras = this.cameras.filter(x => x.cameraZoneid !== id));
    }

    
}