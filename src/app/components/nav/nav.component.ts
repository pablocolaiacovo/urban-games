import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { User } from "firebase";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: User;
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService : AuthService) {}

  ngOnInit() {
    this.authService.user.subscribe(u => {
      this.user =  u;
      this.isLoggedIn = u !== null;
    });
  }

  logout() {
    this.authService.logOut();
  }
}
