import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RightinfoComponent } from './layout/rightinfo/rightinfo/rightinfo.component';
import { TripdirectionComponent } from './components/tripdirection/tripdirection.component';
import { RemainingscreenComponent } from './components/remainingscreen/remainingscreen.component';
import { FinishedscreenComponent } from './components/finishedscreen/finishedscreen.component';
import { TriprequestscreenComponent } from './components/triprequestscreen/triprequestscreen.component';
import { AlertlogscreenComponent } from './components/alertlogscreen/alertlogscreen.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    // { path: 'dashboard/:trip_id', component: DashboardComponent},
    { path: 'dash/:trip_id', component: DashboardComponent},
    // { path: 'tripdirection', component: TripdirectionComponent },
    { path: 'finishedScreen', component: FinishedscreenComponent},
    { path: 'remainingScreen', component: RemainingscreenComponent},
    { path: 'triprequestScreen', component: TriprequestscreenComponent},
    { path: 'alertlogScreen', component: AlertlogscreenComponent}
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