import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { TeamDetailComponent } from "./components/team-detail/team-detail.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TeamSearchComponent } from "./components/team-search/team-search.component";

import { AgmCoreModule } from "@agm/core";
import { MapComponent } from "./components/map/map.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OwlModule } from "ngx-owl-carousel";
import {
  AuthMethods,
  AuthProvider,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from "firebaseui-angular";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { AddTeamComponent } from './components/add-team/add-team.component';

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [AuthProvider.Google, AuthProvider.Password, AuthProvider.Phone],
  method: AuthMethods.Redirect,
  tos: "<your-tos-link>",
  credentialHelper: CredentialHelper.AccountChooser,
  autoUpgradeAnonymousUsers: true,
  disableSignInSuccessCallback: true,
  signInSuccessUrl: '/'
};

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TeamSearchComponent,
    MapComponent,
    LoginComponent,
    NavComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),

    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC47paZagJhXjLL_srU30C5e0r77UNAjZk"
    }),

    FontAwesomeModule,
    OwlModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
