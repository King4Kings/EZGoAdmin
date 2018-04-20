import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { TripList } from '../../../models/TripList';
import { UserList } from '../../../models/UserList';
declare var google;

@Component({
  selector: 'app-rightinfo',
  templateUrl: './rightinfo.component.html',
  styleUrls: ['./rightinfo.component.css']
})
export class RightinfoComponent implements OnInit {

  // lat: number;
  // lng: number;
   
  map :any;
  @ViewChild('map') mapElement: ElementRef;
  totaltrips: Observable<any[]>;
  totalusers: Observable<any>;

  triplist:TripList[];
  userList:UserList[];

  zoom: number = 6;
    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

  

    constructor(db: AngularFirestore) {

      this.totaltrips = db.collection('Trips').valueChanges()
      this.totalusers = db.collection('Users').valueChanges()
  
  
      this.totaltrips.subscribe(data => {
        this.triplist = data;
        // console.log(this.triplist)
      }
      )
      this.totalusers.subscribe(data => {
        this.userList = data
        console.log(this.userList)
      }
    )
    }

    ngOnInit() {
      this.getUserLocation();
    }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat);
        console.log(this.lng);

      });
    }
  }

  getPosition() : any {
    this.totalusers.forEach(element => {
      Object.keys(element).map(key=>element[key]).map(order => {
        console.log(order);

      })
    })
    return {
      "lat" : 0,
      "lng" : 0
    }

  }

  initMap() {
    let posMaceio = { lat: -9.648139, lng: -35.717239 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 8,
        center: posMaceio,
        mapTypeId: 'roadmap'
    });
    this.map.setZoom(13);
    this.map.setCenter(posMaceio);
    }
  
    addMarkerData(data) {
      if (data == null) {
        return;
      }
      if (data.hasOwnProperty("position")) {
        var position = data["position"]
        var location = { lat: position["lat"], lng: position["long"]}
        // this.locationProvider.reverseGeo(location.lat, location.lng)
        this.addMarker(location, position["bearing"])
      }
    }
  
    addMarker(location, bearing) {
      if (this.markers.length == 0) {
        
        var icon = {
          url: "assets/images/cab.png", // url
          scaledSize: new google.maps.Size(20, 40), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
      };
        let marker = new google.maps.Marker({
          position: location,
          map: this.map,
          icon: icon
        });
        this.markers.push(marker);
      } else {
        // this.markers[0].setPosition(location)
      }
      this.map.panTo(location)
    }

  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

