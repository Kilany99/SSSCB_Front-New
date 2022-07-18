import { Component, OnInit } from '@angular/core';
import { PostedDataService } from 'src/app/_services/posted-data-service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './posted-data-container-component.html'
})
export class PostedDataContainerComponent implements OnInit {

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
