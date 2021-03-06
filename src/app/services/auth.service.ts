import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
 
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;

      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          } else {
            this.userDetails = null;
          }
        }
      );
  }
  signInWithFacebook() {
    
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()

    )
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInRegular(email, password) {
     const credential = firebase.auth.EmailAuthProvider.credential( email, password );

    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }


  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
  doRegister(email, password){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
}
