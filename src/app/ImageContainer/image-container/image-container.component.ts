import { Component, OnInit } from '@angular/core';
import { PostedDataService } from 'src/app/_services/posted-data-service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  id:string;
  screenShot:any;
  imagePath:any;
  constructor(private postedDataService:PostedDataService,private _sanitizer: DomSanitizer
              ,private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.screenShot = this.postedDataService.getScreenShot(this.id);
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +this.screenShot);

  }
  getScreenShotPath(id:string){
    this.screenShot = this.postedDataService.getScreenShot(id);
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +this.screenShot);
  }

  

}
