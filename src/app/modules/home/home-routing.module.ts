import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InfoComponent } from './component/info/info.component';
import { DetailComponent } from './component/detail/detail.component';
import { HomeGuard } from './home.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [HomeGuard],
    children: [
      { path: 'info', component: InfoComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
