import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService : AuthService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logOut();
  }
}
