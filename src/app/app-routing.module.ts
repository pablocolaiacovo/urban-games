import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { TeamDetailComponent } from "./components/team-detail/team-detail.component";
import { MapComponent } from "./components/map/map.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: MapComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: TeamDetailComponent },
  { path: "teams", component: TeamsComponent },
  { path: "map", component: MapComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
