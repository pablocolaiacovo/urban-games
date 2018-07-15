import { Component, OnInit } from "@angular/core";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Team } from "../../models/Team";
import { TeamService } from "../../services/team.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.scss"]
})
export class TeamsComponent implements OnInit {
  teams: Team[];
  faArrowRight = faArrowRight;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => (this.teams = teams));
  }
}
