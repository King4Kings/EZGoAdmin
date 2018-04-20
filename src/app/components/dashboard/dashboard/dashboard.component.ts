import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { TripList } from '../../../models/TripList';
import { UserList } from '../../../models/UserList';


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
   userList:UserList[];
   formatedUser = [];

   ngOnInit() {
  }
  // // constructor(db: AngularFireDatabase) {
  // //   this.trips = db.list('CabTrack/Trips/Trip').valueChanges()
  // //   console.log(this.trips);
  // // }
   constructor(db: AngularFirestore) {

    this.trips = db.collection('Trips').valueChanges()
    this.users = db.collection('Users').valueChanges()


    this.trips.subscribe(data => {
      this.triplist = data;
      this.tableFormat()
    }
    )
    this.users.subscribe(data => {
      this.userList = data
      this.tableFormat()
    }
      
    )
  }

  tableFormat() {
    this.triplist.forEach(trip => {
      let users = trip.users
      users.forEach(user => {
       this.formatedUser.push({"user": user, "trip": trip})
      })
    })
  }

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
