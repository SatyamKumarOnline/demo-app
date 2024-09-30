import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfoComponent } from './component/info/info.component';
import { DetailComponent } from './component/detail/detail.component';
import { HomeDataSharingService } from './service/home-data-sharing.service';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [HomeDataSharingService]

})
export class HomeModule { }
