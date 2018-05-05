import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UserList } from '../../../../ezgo-web/src/app/models/userList';
import { QueryFn } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RightinfoService {

  private dbPath = 'UserTrips';
 
  totalusers: Observable<any>;
  userDetails: any;

  constructor(private db: AngularFirestore) {
    this.totalusers = db.collection(this.dbPath).valueChanges()
    this.totalusers.subscribe(data => {
      // this.userList = data
      console.log("service", this.totalusers);
      })
     
  }

  getFullList(): any {
    console.log(this.totalusers);
    return this.totalusers;
  }
}
