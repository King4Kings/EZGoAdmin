import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { TripList } from '../../../models/TripList';
import { UserList } from '../../../models/UserList';
import { RightinfoService } from '../../../service/rightinfo.service'
declare var google: any;

@Component({
  selector: 'app-rightinfo',
  templateUrl: './rightinfo.component.html',
  styleUrls: ['./rightinfo.component.css']
})
export class RightinfoComponent implements OnInit,AfterViewInit  {

  // lat: number;
  // lng: number;
   
  // map :any;
  @ViewChild('AgmMap') agmMap: AgmMap;
  markers = [];
  markersWithId = [];
  totaltrips: Observable<any[]>;
  showdirection = false;
  totalusers: any;
  allList :  any[];
  // markers : MyMarker[] = new Array();

  triplist:TripList[];
  userList:any;

    zoom: number = 14;
    // initial center position for the map
    lat : number= 12.73377 ;
    lon : number= 80.011268 ;
    

    constructor(db: AngularFirestore, private route: ActivatedRoute, private rightinfoService : RightinfoService) {

      this.totaltrips = db.collection('Trips').valueChanges()
      this.totalusers = db.collection('UserTrips').valueChanges()
  
      // this.addMarkerData(this.totalusers)
      this.totaltrips.subscribe(data => {
        this.triplist = data;
        // console.log(this.triplist)
      }
      )
      this.totalusers.subscribe(data => {
        this.userList = data
        console.log(this.userList)
        for(var i=0; i<this.userList.length; i++) {
          var usertrip = this.userList[i];
          console.log("usertrip ======", usertrip)
          var test = this.userList[i].positions;

          // console.log("test"  , test)
          console.log(test.length)
          var last_element = test[test.length - 1];

          console.log("last element ", last_element)

           var lat = last_element.lat;
           var lon = last_element.long;

          console.log("lat and long", lat , lon)
          var tripId =  usertrip.user_id + "_" + usertrip.trip_id; 
          // var loc = { lat : lat, lng: lon }

          var start = usertrip.startAddress;
          var end  = usertrip.endAddress;

          console.log("start", start);
          console.log("end", end);
          
           this.addMarkerUserTrip(tripId,lat,lon)

           

           this.getDirection(tripId,start,end)
          // this.getPosition(lat,lon);
            
          

          // for(var j=0; j <  this.userList[i].positions.length; j++){
          //   // console.log('lat', this.userList[i].positions[j].lat);
          //   // console.log('lon', this.userList[i].positions[j].long);
          //   var lat = this.userList[i].positions[j].lat
          //   var lon = this.userList[i].positions[j].long
          //   this.allList = this.userList[i].positions[j];
          //   // this.getPosition(this.allList)
            
          // }
          
        }
        // this.markers.push(loc)
      //   for (let k=0; test.length; k++){
      //     console.log("this.allList[ k ] ", test[ k ])
      //     var _positions =[];
      //     _positions.push( new google.maps.Marker({
      //       position : test[k] 
      //   })
      //  );
      //   }
      //   console.log("all_list", _positions)
       
        })
    }

    ngOnInit(): void {
      this.route.params.subscribe( params => console.log(params));
  }

    dir = undefined;

    private getDirection(tripId,start,end) {
      // this.showdirection = true;
      if(tripId != undefined){
      this.dir = {
        origin: { lat: start.lat , lng: start.long },
        destination: { lat: end.lat, lng: end.long }
      }
    }
    }

  addMarkerUserTrip(userTripId, lat, lng) {
    console.log("userTripId", userTripId)
       this.markers = this.markers.filter((element) => {
        if (element.tripName == userTripId) {
          return false
        } else {
          return true
        }
      }  
    )

var marker = {
  lat: lat,
  lng: lng,
	//iconUrl:"http://icons.iconarchive.com/icons/icons-land/vista-map-markers/64/Map-Marker-Ball-Pink-icon.png",
  iconUrl:"assets/images/cab.png",
  tripName: userTripId
}

      this.markers.push(marker);

    }
  
    mapIdle(){
      console.log("idle");
    }

    ngAfterViewInit() {
      console.log(this.agmMap);
      this.agmMap.mapReady.subscribe(map => {
        const bounds: LatLngBounds = new google.maps.LatLngBounds();
        // for (const mm of this.markers) {
          bounds.extend(new google.maps.LatLng(this.lat, this.lon));
        // }
        map.fitBounds(bounds);
      });
    }

    
    // mapReady($event: any) { 
    //   // here $event will be of type google.maps.Map 
    //   // and you can put your logic here to get lat lng for marker. I have just put a sample code. You can refactor it the way you want.
    //   this.getLatLong('ChIJN1t_tDeuEmsRUsoyG83frY4', $event, null);
    // }
    
    // getLatLong(placeid: string, map: any, fn) {
    //     let placeService = new google.maps.places.PlacesService(map);
    //     placeService.getDetails({
    //       placeId: placeid
    //       }, function (result, status) {
    //         console.log(result.geometry.location.lat());
    //         console.log(result.geometry.location.lng())
    //       });
    //   }
    

  // initMap() {
  //   let posMaceio = { lat: -9.648139, lng: -35.717239 }
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //       zoom: 8,
  //       center: posMaceio,
  //       mapTypeId: 'roadmap'
  //   });
  //   this.map.setZoom(13);
  //   this.map.setCenter(posMaceio);
  //   }
  
    // addMarkerData(data) {
    //   if (data == null) {
    //     return;
    //   }
    //   if (data.hasOwnProperty("positions")) {
    //     console.log("inside")
    //     var position = data["positions"]
    //     var location = { lat: position["lat"], lng: position["long"]}
    //     // this.locationProvider.reverseGeo(location.lat, location.lng)
    //     this.addMarker(location, position["bearing"])
    //   }
    // }
  
    // addMarker(location) {
    //   if (this.markers.length == 0) {
        
    //     var icon = {
    //       url: "assets/images/cab.png", // url
    //       scaledSize: new google.maps.Size(20, 40), // scaled size
    //       origin: new google.maps.Point(0,0), // origin
    //       anchor: new google.maps.Point(0, 0) // anchor
    //   };
    //     let marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map,
    //       icon: icon
    //     });
    //     console.log(" getmarker",   marker)
    //     this.markers.push(location);
    //     console.log("markers full list" ,this.markers)
    //   } else {
    //     // this.markers[0].setPosition(location)
    //   }
    //   // this.map.panTo(location)
    // }


}
// just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
//   // draggable: boolean;
//   iconUrl: string
// }

