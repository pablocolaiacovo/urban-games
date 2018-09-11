import { Component, OnInit } from "@angular/core";
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure
} from "firebaseui-angular";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {}

  errorCallback(errorData: FirebaseUISignInFailure) {}
}
