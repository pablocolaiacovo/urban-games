import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: Observable<User | null>;
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  logOut(): any {
    this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }
}
