import { Component } from '@angular/core';
import { AppDataSharingService } from '../../shared/services/app-data-sharing.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DetailComponent } from './component/detail/detail.component';
import { DynamicRouteService } from '../../shared/services/dynamic-route.service';
import { Subject, takeUntil } from 'rxjs';
import { HomeDataSharingService } from './service/home-data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // message from mail application
  mainAppMessage: string = '';
  // query param value passed from main application
  queryParamValue : string = '';
  // routes to be added dynamically
  dynamicRoutes: Routes = [
    { path: 'home/detail', component: DetailComponent },  // Dynamically added route
  ];
  private destroy$: Subject<void> = new Subject<void>();


  constructor(private route: ActivatedRoute, private appDataSrvc: AppDataSharingService,
    private homeDataSrvc: HomeDataSharingService,
    private dynamicRouteService: DynamicRouteService) {
    this.dynamicRouteService.addRoutes(this.dynamicRoutes);
  }

  ngOnInit(): void {
    this.appDataSrvc.getMessage()?.pipe(takeUntil(this.destroy$)).subscribe((message: string) => {
      this.mainAppMessage = message;
    });
    
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['id']) {
      this.queryParamValue = params['id'];
      this.homeDataSrvc.setData(this.queryParamValue);
     }
    });
  }
}
