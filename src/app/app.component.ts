import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users:Observable<any[]>;
  user1;
  constructor(db:AngularFirestore){
    this.users = db.collection('users').valueChanges();
    this.users.subscribe(snapShots=>{
        console.log(snapShots)
      });
    this.user1 = db.collection('users').doc('user1').valueChanges()
      .subscribe(snapShot =>{
        console.log(snapShot)
      });
  }
}
