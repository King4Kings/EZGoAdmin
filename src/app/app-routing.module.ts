import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RightinfoComponent } from './layout/rightinfo/rightinfo/rightinfo.component';
import { TripdirectionComponent } from './components/tripdirection/tripdirection.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'dash/:trip.id', component: DashboardComponent}
    // { path: 'tripdirection', component: TripdirectionComponent },
    // { path: 'rightinfo', component: RightinfoComponent }
    

];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {useHash: true})
      //RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }