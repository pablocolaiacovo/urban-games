import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  model: Team;
  success: Boolean;
  message: String;

  constructor(
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetTeam();
  }

  onSubmit() {
    this.teamService.addTeam(this.model).subscribe(team => {
      this.success = team != undefined;
      this.message = this.success ? "Yay!" : "Oh no :(";
      if (this.success) {
        this.router.navigate(["/teams"]);
      }
    });
  }

  resetTeam() {
    this.model = new Team();
    this.message = "";
  }
}
