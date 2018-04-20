import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  // template: `
  // <ul>
  //   <li *ngFor="let trip of trips | async">
  //     {{ trip | json }}
  //   </li>
  // </ul>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'app';
//   trips: object;

//     constructor(private adb: AngularFireDatabase) {}

//     ngOnInit() {
//       this.adb.list<any>('0').valueChanges().subscribe(res => {
//       this.trips = res;
//       console.log(this.trips)
//     });
//   }
// }

export class AppComponent {
  title = 'app';
  // trips: Observable<any[]>;
  // // constructor(db: AngularFireDatabase) {
  // //   this.trips = db.list('CabTrack/Trips/Trip').valueChanges()
  // //   console.log(this.trips);
  // // }
  // constructor(db: AngularFirestore) {

  //   this.trips = db.collection('Trips').valueChanges()
  //   this.trips.subscribe(data =>
  //     console.log(data)
  //   )
  // }
}
