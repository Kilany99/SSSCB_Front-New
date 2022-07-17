import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { PostedDataService } from '../_services/posted-data-service';

@Component({ templateUrl: 'posted-data-list-component.html' })
export class PostedDataListComponent implements OnInit {
    postedDatas: any[] ;

    constructor(private postedDataService: PostedDataService) {}

    ngOnInit() {
        this.postedDataService.getAll()
            .pipe(first())
            .subscribe(postedDatas => this.postedDatas = postedDatas);
            
    }

    
}