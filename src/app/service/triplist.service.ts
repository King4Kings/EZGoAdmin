import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class TripListService {
 trips: any;

constructor(private http: Http, private db: AngularFireDatabase) {}

getTripData(tripId: String) {
//     return this.db.list('Trips',{
//         query: {
//             orderByChild: 'tripId',
//             equalTo: 'tripId',
//         }
//     })
//     .first()
//     .map(result => this.trips.parseFromJson(result));
// }

}
}