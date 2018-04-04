import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { FirebaseDatabase } from '@firebase/database-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  firstCourse:any;

  constructor(public af: AngularFireDatabase) {
    this.courses$ = af.list('courses');
   this.courses$.subscribe(console.log); 
   this.lesson$=af.object('lesson/-L5N3uk_CPSLsnKVRty6');
   this.lesson$.subscribe(console.log);
   this.courses$.switchMap(courses =>courses[0])
   .subscribe(
     course=>this.firstCourse=course
   );

  }
  listPush(){
    this.courses$.push({description:'TEST NEW COURSE'})
    .then(
      () =>console.log('List push Done'),
      console.error

    )
  }
  
  listRemove(){

  }
  listUpdate(){

  }
  objUpdate(){

  }
  objSet(){

  }


}
