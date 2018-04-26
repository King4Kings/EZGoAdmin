import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tripdirection',
  templateUrl: './tripdirection.component.html',
  styleUrls: ['./tripdirection.component.css']
})
export class TripdirectionComponent implements OnInit {

  totaltrips: Observable<any[]>;
  totalusers: any;
  userList:any;

  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;

  constructor(db: AngularFirestore) {

    this.totaltrips = db.collection('Trips').valueChanges()
    this.totalusers = db.collection('UserTrips').valueChanges()

    this.totalusers.subscribe(data => {
      this.userList = data
      console.log(this.userList)
      for(var i=0; i<this.userList.length; i++) {
        var usertrip = this.userList[i];
        var test = this.userList[i].positions;

        var tripId =  usertrip.user_id + "_" + usertrip.trip_id; 
        // var loc = { lat : lat, lng: lon }

        var start = usertrip.startAddress;
        var end  = usertrip.endAddress;
      
         this.getDirection(tripId,start,end)
    
      }     
      })
  }

  ngOnInit() {
  }

  dir = undefined;

  private getDirection(tripId,start,end) {

    if(tripId != undefined){
    this.dir = {
      origin: { lat: start.lat , lng: start.long },
      destination: { lat: end.lat, lng: end.long }
    }
  }
  }

}
