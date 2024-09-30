import { Component } from '@angular/core';
import { HomeDataSharingService } from '../../service/home-data-sharing.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  // query param value passed from main application
  queryParamValue : string = '';

  constructor( private homeDataSrvc: HomeDataSharingService) {
    
  }
  ngOnInit(): void {
    this.queryParamValue = this.homeDataSrvc.getData();
  }

}
