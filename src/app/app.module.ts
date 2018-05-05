import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { RightinfoService } from '../app/service/rightinfo.service'


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { LeftnavComponent } from './layout/leftnav/leftnav.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AlertlogscreenComponent } from './components/alertlogscreen/alertlogscreen.component';
import { FinishedscreenComponent } from './components/finishedscreen/finishedscreen.component';
import { TriprequestscreenComponent } from './components/triprequestscreen/triprequestscreen.component';
import { RemainingscreenComponent } from './components/remainingscreen/remainingscreen.component';
import { RightinfoComponent } from './layout/rightinfo/rightinfo/rightinfo.component';
import { TripdirectionComponent } from './components/tripdirection/tripdirection.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LeftnavComponent,
    DashboardComponent,
    RightinfoComponent,
    TripdirectionComponent,
    AlertlogscreenComponent,
    FinishedscreenComponent,
    TriprequestscreenComponent,
    RemainingscreenComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOJu50WRJgFwfswb-rZqPviDOp_-pUEvk'
    }),
    AgmDirectionModule
  ],
  providers: [
    AngularFirestoreModule,
    RightinfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
