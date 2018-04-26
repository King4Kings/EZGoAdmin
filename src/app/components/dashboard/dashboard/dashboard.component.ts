import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TripList } from '../../../models/TripList';
import { UserList } from '../../../models/UserList';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   trips: Observable<any[]>;
   triplist:TripList[];
   activePage:1;
   searchText:string;
   @Input() loading: boolean = true;
   users: Observable<any>;
   userList:any;
   formatedUser = [];

  // // constructor(db: AngularFireDatabase) {
  // //   this.trips = db.list('CabTrack/Trips/Trip').valueChanges()
  // //   console.log(this.trips);
  // // }
   constructor(db: AngularFirestore, private router: Router, private route: ActivatedRoute) {

    this.trips = db.collection('Trips').valueChanges()
    this.users = db.collection('UserTrips').valueChanges()

    this.trips.subscribe(data => {
      this.triplist = data;

      for(var i=0;i < this.triplist.length;i++){
        var totalTrips = this.triplist[i];
        var tripId = totalTrips.id;
        // this.getTripDirection(tripId)

      }

      for(var i=0; i<this.userList.length; i++) {
        var usertrip = this.userList[i];
        var test = this.userList[i].positions;

        var tr =  usertrip.user_id + "_" + usertrip.trip_id; 
        // var loc = { lat : lat, lng: lon }

        var start = usertrip.startAddress;
        var end  = usertrip.endAddress;

      
    }
       
    }
    )
    this.users.subscribe(data => {
      this.userList = data
      // this.tableFormat()
    }
      
    )

  }

   ngOnInit()  {
  //   this.route.params.subscribe(
  //     params => {
  //         const id = +params['trip.id'];
  //         console.log("===  ====", id)
  //         //this.getMovie(id);
  //     }
  // );

}

  getTripDirection(tripId){

    // this.router.navigate(['rightinfo'], { queryParams : {"tripId" : tripId}});

  }

  // tableFormat() {
  //   this.triplist.forEach(trip => {
  //     let users = trip.users
  //     users.forEach(user => {
  //      this.formatedUser.push({"user": user, "trip": trip})
  //     })
  //   })
  // }

  getUserName(index): string {
  //  console.log(triplist)
   var tripUser = this.triplist[index].users;
   var userName: string;
   if (tripUser.constructor === Array) {
     userName = tripUser[0]
   } else {
     userName = tripUser;
   }
   return userName;
  }

  getZid(index):string{

    var zidvalue =  this.userList[index].zID;
    console.log(zidvalue);
    var userzid: string;
   if (zidvalue.constructor === Array) {
    userzid = zidvalue[0]
   } else {
    userzid = zidvalue;
   }
   return userzid;
  }
    
  onSorted(criteria) {
    let direction = criteria.sortDirection === 'desc' ? 1 : -1;
    this.triplist.sort((a, b) => {
      if(a[criteria.sortColumn] < b[criteria.sortColumn]) {
        return -1 * direction
      }
      else if(a[criteria.sortColumn] > b[criteria.sortColumn]) {
        return 1 * direction
      }
      return 0;
    })
  }
}
