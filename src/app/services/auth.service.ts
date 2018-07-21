import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: User;
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = user !== null;
    });
  }

  logOut(): any {
    this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }
}
